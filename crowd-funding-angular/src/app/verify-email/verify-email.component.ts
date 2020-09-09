import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
email;
otp;
new_password;
user_id;

OtpArray={
  email:'',
  system_otp:0
}
passwordArray={
  new_password:"",
  user_id:""
};

one:boolean=true;
two:boolean=false;
three:boolean=false;
  loginData = {
    email : '',
    password : ''
  }
  invalidCredentials;
  constructor(private router:Router, public authService:AuthService) { }

  ngOnInit() {
    this.invalidCredentials=false;
  }
  login(){
    this.authService.login(this.loginData).subscribe((data:any) =>{
      if(data.status=="1"){
        this.router.navigate(['']);
        console.log(data);
        localStorage.setItem('token',data.jwtToken);
      } 
      else{
        this.invalidCredentials=true;
      }
    });

  
  }







  verifyEmail(){
    this.OtpArray.system_otp=Math.floor(100000 + Math.random() * 900000);
    this.authService.sendOtp(this.OtpArray).subscribe((data:any)=>{
      if(data.status=="1"){
        this.passwordArray.user_id=data.user_id;
        this.one=false;
        this.two=true;
      }
    })

    
  }
  verifyOtp(){
    if(this.otp==this.OtpArray.system_otp){
      this.two=false;
      this.three=true;
    } 
    
  }
  resetPassword(){
    if(this.passwordArray.new_password.length>5){
      this.authService.resetPassword(this.passwordArray).subscribe(data=>{
        this.router.navigate(['/login']);
      });
    }
  }
}