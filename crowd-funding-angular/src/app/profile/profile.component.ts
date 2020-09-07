import { MainService } from 'src/app/services/main.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Profile} from '../model/profile';
import { Route } from '@angular/compiler/src/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile:Profile;
   Profile:any =[];
   profileid :string;
   username:string;
   useremail:string;
   thumbnail:any;
  constructor(private authService:AuthService,private main: MainService, private route : ActivatedRoute,private router:Router,private sanitizer: DomSanitizer) { }
 
  ngOnInit() {
    
    this.authService.getUserId().subscribe(
      (data:any) => {
        if(data.user_id && data.status=='1'){
          this.profileid=data.user_id;
          console.log(data);
    this.main.getprofile(data.user_id).subscribe(
      (data) =>{
          this.Profile=data;
          //console.log(data[0].profile_img.data);
          this.username=data[0].user_name;
          this.useremail=data[0].user_email
        });
      }
        else{
            this.Profile =undefined;
        }  
       // console.log(this.Profile);
      })
     
    
  }
   getimage(baseImage:any){
    let objectURL = 'data:image/jpeg;base64,' + baseImage.data;

    this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
   }


   logout(){
     localStorage.clear();
     this.router.navigate(['/login']);  
   }
}
