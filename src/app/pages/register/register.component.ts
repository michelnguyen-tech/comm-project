import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { markedTrigger } from './animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    markedTrigger
  ]
})
export class RegisterComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginForm() {
    this.router.navigateByUrl('/login');
  }

}
