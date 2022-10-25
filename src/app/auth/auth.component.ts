import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginMode = true;
  rememberMe: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(loginDetails: any){
    if(this.loginMode){
      this.http.post(`${environment.SERVER_LINK}/api/Login`, loginDetails).subscribe((res: any) => {
        if(this.rememberMe){
          localStorage.setItem('user', JSON.stringify(res));
        } else {
          sessionStorage.setItem('user', JSON.stringify(res));
        }
        this.router.navigate(['']);
        console.log(res);
      })
    } else {
      this.http.post(`${environment.SERVER_LINK}/api/Register`, loginDetails).subscribe((res: any) => {
        this.switchMode();
        console.log(res);
        // this.users = res;
      })
    }
  }

  switchMode(){
    this.loginMode = !this.loginMode;
  }

}
