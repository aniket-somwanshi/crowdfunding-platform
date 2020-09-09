import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {
  user_id;
  days_to_go;
  rewards: any;
  comments: any;
  story = [];
  faqs: any;
  campaign:any = [];

  constructor(public authService:AuthService,public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.authService.getUserId().subscribe((data:any)=>{
        if(data.status=="1"){
          this.user_id=data.user_id;
        }
        else{
          this.router.navigate(['login']);
        }
      });
    }
    this.campaignService.getCampaignById(this.route.snapshot.paramMap.get("campaign_id"))
      .subscribe((data: any) => {
        this.campaign = data.campaign[0];
        this.days_to_go = data.days_to_go;
        this.rewards = data.rewards;
        this.comments = data.comments;
        this.story = data.story;
        this.faqs = data.faqs;
        console.log(data.campaign);
      });
  }

  updateCampaign(campaignForm: NgForm){

    if(this.user_id==this.campaign.user_id){
      this.campaignService.updateCampaign(this.campaign).subscribe(data=>{
        this.ngOnInit();
      });
    }
  
  }

  goToNewRewards(){
    this.router.navigate(["new-rewards/" + this.campaign.campaign_id]);
  }
  goToNewFAQs(){
    this.router.navigate(["new-faqs/" + this.campaign.campaign_id]);
  }
}
