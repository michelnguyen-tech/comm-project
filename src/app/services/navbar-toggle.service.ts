import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarToggleService {

  constructor() { }

  private subject = new BehaviorSubject('initialize');
  
  sendClickEvent(newValue:string) {
    this.subject.next(newValue);
    console.log(newValue);
  }

  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
}
