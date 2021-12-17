import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuthentified = new Subject<boolean>();
  
  constructor() { }
}
