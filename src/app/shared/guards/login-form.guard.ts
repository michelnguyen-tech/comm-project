import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginFormGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
  ): Observable<boolean> { 
    return component.canDeactivate();
  }
  
}
