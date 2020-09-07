import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CampaignService } from "../services/campaign.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-rewards",
  templateUrl: "./add-rewards.component.html",
  styleUrls: ["./add-rewards.component.css"],
})
export class AddRewardsComponent implements OnInit {
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
    public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    //get campaign id which is in the params
    this.cmp_id = this.route.snapshot.paramMap.get("campaign_id");
    console.log(this.cmp_id);
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

  // done - go to faq
  goToFaq() {
    //redirect with this campaign_id
    this.router.navigate(["/create-campaign/add-faq/" + this.cmp_id]);
  }
}
