import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FundsService } from '../services/funds.service';

@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.css']
})
export class PledgeComponent implements OnInit {
  pledgePost = {
    "funds":{
    "campaign_id": 0,
    "rewards_id": 0,
    "backer_id": 0
    },
    "rewards_amount":0
  };
  
  successful:boolean;

  days_to_go;
  rewards: any;
  comments: any;
  story = [];
  faqs: any;
  camp = [];

  constructor(
    public fundsService:FundsService,
    public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.campaignService.getCampaignById(this.route.snapshot.paramMap.get("campaign_id"))
      .subscribe((data: any) => {
        this.camp = data.campaign;
        this.days_to_go = data.days_to_go;
        this.rewards = data.rewards;
        this.comments = data.comments;
        this.story = data.story;
        this.faqs = data.faqs;
        console.log(data);
      });
  }

  goToLearnMore() {
    this.router.navigate(['learn-more/' + this.camp[0].campaign_id]);
  }

  pledge(rewards_id, rewards_amount) {
    // this.pledgePost.backer_id=this.user.id
    // current loggedin user's id
    this.pledgePost.funds.backer_id = 5;
    this.pledgePost.funds.campaign_id = this.camp[0].campaign_id;
    this.pledgePost.funds.rewards_id = rewards_id;
    this.pledgePost.rewards_amount = rewards_amount;
    this.fundsService.pledge(this.pledgePost)
    .subscribe((data:any)=>{
      console.log(data);
      if(data.status=="1"){
        console.log("done");
        
        this.successful=true;
      }
    });

  }
}
