import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  days_to_go;
  rewards: any;
  comments: any;
  story :any= [];
  faqs: any;
  camp = [];
  // camp = {
  //   'campaign_id': '',
  //   'cam_reg_date': '',
  //   'cam_no_backers': 0,
  //   'total_amount': 0,
  //   'status': '',
  //   'user_id': 0,
  //   'cam_title': '',
  //   'cam_subject': '',
  //   'cam_desc': '',
  //   'cam_category': '',
  //   'cam_duration': '',
  //   'cam_pledge': ''
  // }

  constructor(public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.campaignService.getCampaignById(this.route.snapshot.paramMap.get("id"))
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
  goToPledge(){
    this.router.navigate(['pledge/' + this.camp[0].campaign_id]);
  }
}

