import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router,private main: MainService, private route : ActivatedRoute) { }
  profileid:any;
  Myprojects:any=[];
  ngOnInit() {
    this.authService.getUserId().subscribe(
      (data:any) => {
        if(data.user_id && data.status=='1'){
          this.profileid=data.user_id;
    this.main.getmyprojects(data.user_id).subscribe(
      (data) =>{
          this.Myprojects=data;
          console.log(this.Myprojects);
        })}
        else{
            this.Myprojects =undefined;
            console.log(this.Myprojects)
        }  
       // console.log(this.Profile);
      })
  }

  goToCampaign(id){
    console.log("sd"+id);
    this.router.navigate(['/campaign/'+id]);
  }

}
