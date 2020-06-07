import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-home-backer',
  templateUrl: './home-backer.component.html',
  styleUrls: ['./home-backer.component.css']
})
export class HomeBackerComponent implements OnInit {

  constructor(public campaignService:CampaignService,private router:Router) { }

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


  

}
