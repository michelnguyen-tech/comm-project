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
  isToggle = false;
  private authSub!: Subscription;
  toggleNavsubscription: Subscription;


  constructor(private authService: AuthService, private toggleService: NavbarToggleService, private navToggleService: NavbarToggleService) {
    this.toggleNavsubscription = this.navToggleService.getClickEvent().subscribe((value) => {
      this.handleNavToggle(value)
    })
   }

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

  handleNavToggle(value: string) {
    if (value == "shrink") {
      this.isToggle = true;
    }
    else if(value == "increase") {
      this.isToggle = false;
    }
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.toggleNavsubscription.unsubscribe();
  }

}
