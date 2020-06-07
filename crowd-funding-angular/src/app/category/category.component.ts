import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  newestCampaigns=[];

  constructor(private router:Router,
    public route:ActivatedRoute,
    public campaignService:CampaignService,
    ) { }

  ngOnInit() {
   
    this.campaignService.getNewestCampaignsByCategory(this.route.snapshot.paramMap.get("category"))
    .subscribe((data:any)=>{
      this.newestCampaigns=data;
      console.log(this.newestCampaigns);
    });

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
  
goToCampaign(id){
  console.log("sd"+id);
  this.router.navigate(['/campaign/'+id]);
}

}
