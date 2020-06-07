import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  // define stucture of campaign to be created
  campaign={
    'user_id':0,
    'cam_title':'',
    'cam_subject':'',
    'cam_desc':'',
    'cam_category':'',
    'cam_duration':'',
    'cam_pledge':''
  }

  constructor(
    private router:Router,
    public campaignService:CampaignService
  ) { }
  
  ngOnInit() {
    // intialize all form inputs to null
    // this.campaign.user_id=0;
    // this.campaign.cam_title='';
    // this.campaign.cam_subject='';
    // this.campaign.cam_desc='';
    // this.campaign.cam_category='';
    // this.campaign.cam_duration='';
    // this.campaign.cam_pledge='';
  }

  createCampaign(campaignForm:NgForm){
    console.log(this.campaign);
    // static user_id
    this.campaign.user_id=3;
    // call service to crate campaign and redirect user to enter next inputs
    this.campaignService.createCampaign(this.campaign).subscribe((data:any)=>{
      //insertId gives - auto increment primary key 
      console.log(data.insertId);    
      //redirect with this campaign_id
      this.router.navigate(['/create-campaign/add-rewards/'+data.insertId]);  
    });
    // finally reset the form
    campaignForm.reset();

  }

}
