import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logged:boolean;

  constructor(public router:Router, private authService:AuthService) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      console.log("lOGIN nav");
    }
  }

  createCampaign(){
    if(localStorage.getItem('token')){
      this.authService.getUserId().subscribe((data:any)=>{
        if(data.status=="1"){
          this.router.navigate(['create-campaign']);
        }
        else{
          this.router.navigate(['login']);
        }
      });
    }
    else{
      this.router.navigate(['login']);
    }
  }

  profile(){
    if(localStorage.getItem('token')){
      this.authService.getUserId().subscribe((data:any)=>{
        if(data.status=="1"){
          this.router.navigate(['profile']);
        }
        else{
          this.router.navigate(['login']);
        }
      });
    }
    else{
      this.router.navigate(['login']);
    }
  }

  manageCampaigns(){
    if(localStorage.getItem('token')){
      this.authService.getUserId().subscribe((data:any)=>{
        if(data.status=="1"){
          this.router.navigate(['manage-campaigns']);
        }
        else{
          this.router.navigate(['login']);
        }
      });
    }
    else{
      this.router.navigate(['login']);
    }
  }
  

}
