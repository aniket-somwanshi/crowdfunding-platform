import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {

  private learnMoreSubs: any;

  commentPost = {
    comment: '',
    campaign_id: 0,
    user_id: 0
  };


  days_to_go;
  rewards: any;
  comments: any;
  story = [];
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


  addComment(commentForm: NgForm) {
    this.commentPost.campaign_id = this.camp[0].campaign_id;
    // this.commentPost.user_id = this.user.id
    // logged in user's id
    this.commentPost.user_id = 3;

    this.campaignService.addComment(this.commentPost).subscribe((data: any) => {
      if (data.status == '1') {
        commentForm.reset();
        this.ngOnInit();
      }
    });

  }
}
 