import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CampaignService } from "../services/campaign.service";
import { NgForm } from "@angular/forms";
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-new-rewards',
  templateUrl: './new-rewards.component.html',
  styleUrls: ['./new-rewards.component.css']
})
export class NewRewardsComponent implements OnInit {
user_id;
camp_user_id;
  insertedReward;
  // define stucture of campaign to be created
  reward = {
    campaign_id: 0,
    rewards_sub: "",
    rewards_desc: "",
    rewards_amount: "",
  };

  cmp_id;
  constructor(
    public authService:AuthService,
    public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {


    if (localStorage.getItem("token")) {
      this.authService.getUserId().subscribe((data: any) => {
        if (data.status == "1") {
          this.user_id = data.user_id;
        } else {
          this.router.navigate(["login"]);
        }
      });
    } else {
      this.router.navigate(["login"]);
    }


    //get campaign id which is in the params
    this.cmp_id = this.route.snapshot.paramMap.get("campaign_id");
    console.log(this.cmp_id);

    this.campaignService
    .getCampaignById(this.route.snapshot.paramMap.get("campaign_id"))
    .subscribe((data: any) => {
      console.log(data);
      this.camp_user_id = data.campaign[0].user_id;
    });


    // using subscribe
    // this.route.paramMap.subscribe(params => {
    //   this.animal = params.get("animal")
    // });
    // initialize form inputs to null
    // this.reward.campaign_id=0;
    // this.reward.rewards_amount='';
    // this.reward.rewards_desc='';
    // this.reward.rewards_sub='';
  }

  addReward(rewardsForm: NgForm) {

console.log(this.user_id +this.camp_user_id);
    if(this.user_id==this.camp_user_id){

    

    console.log(this.reward);
    // static user_id
    this.reward.campaign_id = this.cmp_id;
    // call service to crate campaign and redirect user to enter next inputs
    this.campaignService.createReward(this.reward).subscribe((data: any) => {
      if (data.affectedRows > 0) {
        // user friendly msg that reward was inserted
        this.insertedReward = true;
        // this.reward.rewards_amount='';
        // this.reward.rewards_desc='';
        // this.reward.rewards_sub='';
      } else {
        this.insertedReward = false;
      }
    });
    // now reset the form
    rewardsForm.reset();

    }
  }
  // done - go to faq
  goToFaq() {
    //redirect with this campaign_id
    this.router.navigate(["/edit-campaign/"+ this.cmp_id]);
  }
}