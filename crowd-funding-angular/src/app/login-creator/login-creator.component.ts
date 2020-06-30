import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-creator',
  templateUrl: './login-creator.component.html',
  styleUrls: ['./login-creator.component.css']
})
export class LoginCreatorComponent implements OnInit {

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
    this.authService.login(this.loginData).subscribe((data:any) =>{
      if(data.status=="1"){
        this.router.navigate(['creator']);
        this.invalidCredentials=false;
      }
      else{
        this.invalidCredentials=true;
      }
    });
  }

}
