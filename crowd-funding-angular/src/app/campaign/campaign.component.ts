import { Component, OnInit } from "@angular/core";
import { CampaignService } from "../services/campaign.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-campaign",
  templateUrl: "./campaign.component.html",
  styleUrls: ["./campaign.component.css"],
})
export class CampaignComponent implements OnInit {
  days_to_go;
  rewards: any;
  comments: any;
  story = [];
  faqs: any;
  camp = [];
  failed = false;
  user_id;

  constructor(
    public http: HttpClient,
    private authService: AuthService,
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

    this.campaignService
      .getCampaignById(this.route.snapshot.paramMap.get("id"))
      .subscribe((data: any) => {
        console.log(data);
        this.camp = data.campaign;
        this.days_to_go = data.days_to_go;

        //uncomment below lines at end

        if (
          this.days_to_go < 0 &&
          this.camp[0].total_amount < this.camp[0].cam_pledge
        ) {
          this.failed = true;
          this.setCampaignFailed(this.camp[0].campaign_id);
        } else if (
          this.days_to_go < 0 &&
          this.camp[0].total_amount > this.camp[0].cam_pledge
        ) {
          this.days_to_go = 0;
        } else {
          this.failed = false;
        }
        this.rewards = data.rewards;
        this.comments = data.comments;
        this.story = data.story;
        this.faqs = data.faqs;
      });
  }
  setCampaignFailed(camp_id) {
    console.log("called");
    this.http
      .put("http://localhost:3000/api/campaignfailed/", { camp_id })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }

  goToLearnMore() {
    this.router.navigate(["learn-more/" + this.camp[0].campaign_id]);
  }
  goToPledge() {
    this.router.navigate(["pledge/" + this.camp[0].campaign_id]);
  }
}
