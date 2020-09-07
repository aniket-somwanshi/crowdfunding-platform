import { Component, OnInit } from "@angular/core";
import { CampaignService } from "../services/campaign.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-create-campaign",
  templateUrl: "./create-campaign.component.html",
  styleUrls: ["./create-campaign.component.css"],
})
export class CreateCampaignComponent implements OnInit {
  user_id: any;
  image_preview;
  // define stucture of campaign to be created
  campaign = {
    user_id: 0,
    cam_title: "",
    cam_subject: "",
    cam_desc: "",
    cam_category: "",
    cam_duration: "",
    cam_pledge: "",
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    public campaignService: CampaignService
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
    }
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image_preview = file;
    }
  }

  createCampaign(campaignForm: NgForm) {
    console.log(this.campaign);
    const formData = new FormData();
    formData.append("cam_title", this.campaign.cam_title);
    formData.append("cam_subject", this.campaign.cam_subject);
    formData.append("cam_desc", this.campaign.cam_desc);
    formData.append("cam_duration", this.campaign.cam_duration);
    formData.append("cam_category", this.campaign.cam_category);
    formData.append("cam_pledge", this.campaign.cam_pledge);
    formData.append("user_id", this.user_id);

    formData.append("image_preview", this.image_preview);
    // static user_id
    this.campaign.user_id = this.user_id;
    // call service to crate campaign and redirect user to enter next inputs
    this.campaignService.createCampaign(formData).subscribe((data: any) => {
      //insertId gives - auto increment primary key
      console.log("inserted id" + data.insertId);

      //redirect with this campaign_id
      this.router.navigate(["/create-campaign/add-rewards/" + data.insertId]);
    });
    // finally reset the form
    campaignForm.reset();
  }
}
