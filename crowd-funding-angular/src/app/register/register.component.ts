import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    user_name : '',
    user_email : '',
    password : '',
    user_phone : '',
    type : ''
  };
  
  constructor( private router:Router, public authService:AuthService) { }

  ngOnInit() { }

  register(){
    this.authService.register(this.registerData).subscribe((data:any) =>{
      if(data.status=="1" && data.type=="backer"){
        this.router.navigate(['login']);
      }
      else if(data.status=="1" && data.type=="creator"){
        this.router.navigate(['login-creator']);
      }
    });
  }

}
