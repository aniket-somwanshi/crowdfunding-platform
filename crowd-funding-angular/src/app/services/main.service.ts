import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http' ;
import {Profile} from '../model/profile';
import {Observable} from 'rxjs';
import { catchError, map } from "rxjs/operators";


// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})


export class MainService {
   httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
  };

root_url="http://localhost:3000/api";

profileid:string;
  constructor(public http:HttpClient) {
   
   }
  
  //get profile info 
   getprofile(uri:string):Observable<Profile>{
     
    return this.http.get<Profile>(`${this.root_url}/${uri}`);
    
  }
  
  //get about info
  getabout(uri:string){
    return this.http.get(`${this.root_url}/${uri}/about`);
  }
  
  //update about info
  updateabout(uri:string, about:Profile){
    return this.http.put(`${this.root_url}/${uri}/about`,about);
  }

  //get backed projects
  getbacked(uri:string){
    this.profileid =uri;
    return this.http.get(`${this.root_url}/${uri}/backed`)
  }
  
  //get details of backed campaign
  getbackdetails(funid:string){
    return this.http.get(`${this.root_url}/${this.profileid}/backed/details/${funid}`)
  }

  //get myprojects list
  getmyprojects(uri:string){
    return this.http.get(`${this.root_url}/${uri}/myprojects`)
  }
}
