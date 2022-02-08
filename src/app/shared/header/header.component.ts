import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarToggleService } from 'src/app/services/navbar-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn : boolean = false;
  toggleNav : boolean = false
  private authSub!: Subscription;

  constructor(private authService: AuthService, private toggleService: NavbarToggleService) { }

  ngOnInit(): void {
    this.authSub = this.authService.userAuthentified.subscribe(didAuth => {
      this.loggedIn = didAuth;
    })
  }

  toggleNavBar() {
    this.toggleNav = !this.toggleNav;
    if(this.toggleNav == true)
      this.toggleService.sendClickEvent("shrink");
    if(this.toggleNav == false)
      this.toggleService.sendClickEvent("increase");
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

}
