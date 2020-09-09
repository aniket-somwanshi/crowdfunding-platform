import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string="http://localhost:3000/api/";

  constructor(public http:HttpClient) { }

  login(loginData){
    return this.http.post(this.url+'login', loginData);
  }

  // loginCreator(loginData){
  //   return this.http.post(this.url+'login-creator', loginData);
  // }

  register(registerData){
    return this.http.post(this.url+'register', registerData);
  }
  
  getUserId() {
    return this.http.get(this.url+'getUserId', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  getUserDetails(id){
    return this.http.get(this.url+'get-user-details/'+id);
  }

  // verify email exists in db and send
  sendOtp(otpArray){
    return this.http.post(this.url+'send-otp',otpArray);
  }
  resetPassword(passwordArray){
    return this.http.post(this.url+'reset-password',passwordArray);
  }
}
