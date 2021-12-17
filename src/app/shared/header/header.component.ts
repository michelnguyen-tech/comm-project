import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn : boolean = false;
  private authSub!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSub = this.authService.userAuthentified.subscribe(didAuth => {
      this.loggedIn = didAuth;
    })
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

}
