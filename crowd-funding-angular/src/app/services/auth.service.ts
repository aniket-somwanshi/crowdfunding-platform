import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string="http://localhost:3000/api/";

  constructor(public http:HttpClient) { }

  loginBacker(loginData){
    return this.http.post(this.url+'login-backer', loginData);
  }

  loginCreator(loginData){
    return this.http.post(this.url+'login-creator', loginData);
  }

  register(registerData){
    return this.http.post(this.url+'register', registerData);
  }

}
