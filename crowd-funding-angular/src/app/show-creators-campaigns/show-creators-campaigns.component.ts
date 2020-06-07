import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CampaignService } from '../services/campaign.service';
@Component({
  selector: 'app-show-creators-campaigns',
  templateUrl: './show-creators-campaigns.component.html',
  styleUrls: ['./show-creators-campaigns.component.css']
})
export class ShowCreatorsCampaignsComponent implements OnInit {

  constructor(
    public campaignService:CampaignService,
    public http:HttpClient
  ) { }

  user_id=3;
  campaigns=[];

  ngOnInit() {
    // get this creator's campaigns
    this.campaignService.getCreatorsCampaigns(this.user_id).subscribe((data:any[])=>{
      console.log(data);
      this.campaigns=data;
    });

  }

}
