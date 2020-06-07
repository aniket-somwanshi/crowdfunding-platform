import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    email : '',
    password : ''
  }
  invalidCredentials;
  constructor( private router:Router, public authService:AuthService) { }

  ngOnInit() {
    this.invalidCredentials=false;
  }
  login(){
    this.authService.loginBacker(this.loginData).subscribe((data:any) =>{
      if(data.status=="1"){
        this.router.navigate(['backer']);
      }
      else{
        this.invalidCredentials=true;
      }
    });
  }
}
