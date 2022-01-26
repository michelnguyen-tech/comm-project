import { animate, AnimationBuilder, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { markedTrigger } from './animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    markedTrigger,

  ]
})
export class LoginComponent implements OnInit {

  private animationsDoneSource = new BehaviorSubject <boolean>(false);

  constructor(private router: Router, private builder: AnimationBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> {
    this.animationsDoneSource.next(true);
    return this.animationsDoneSource.asObservable();
  }

  registerForm(element: any) {
    const animation = this.builder.build([
      animate('100ms ease-in', style({
        opacity: 0,
        transform: 'translateY(100%)'
    }))
    ])
    const player = animation.create(element);
    player.play();
    player.onDone(() => {
      this.animationsDoneSource.next(true);
    })
    //setTimeout(() => {this.router.navigate(['/register']);}, 4000);

    this.router.navigateByUrl('/register');
  };

  confirmLogin() {
    this.authService.userAuthentified.next(true);
    this.router.navigateByUrl('/home');
  }

}

