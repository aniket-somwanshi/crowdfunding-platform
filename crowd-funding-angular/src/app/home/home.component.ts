import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private authService:AuthService,public campaignService:CampaignService,private router:Router) { }

  ngOnInit() {
    
  }

  slideConfig = {
    "slidesToShow": 4, 
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows":true,
    "dots":false,
    "infinite": true,
  };

  goToCategory(category){
    this.router.navigate(['/category/'+category]); 
  }


  

 goToCampaign(id){


    if(localStorage.getItem('token')){
      this.authService.getUserId().subscribe((data:any)=>{
        if(data.status=="1"){
          this.router.navigate(['/campaign/'+id]);
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
