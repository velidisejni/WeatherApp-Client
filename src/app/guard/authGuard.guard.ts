import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if(localStorage.getItem('user') || sessionStorage.getItem('user')){
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
