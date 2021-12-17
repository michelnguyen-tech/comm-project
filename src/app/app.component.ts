import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comm-platform';

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
