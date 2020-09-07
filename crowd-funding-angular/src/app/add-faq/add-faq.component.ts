import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CampaignService } from "../services/campaign.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-faq",
  templateUrl: "./add-faq.component.html",
  styleUrls: ["./add-faq.component.css"],
})
export class AddFaqComponent implements OnInit {
  inserted = false;
  // define stucture of campaign to be created
  faq = {
    campaign_id: 0,
    faq_qust: "",
    faq_ans: "",
  };

  count: number = 1;

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
  }

  addFaqs(faqsForm: NgForm) {
    console.log(this.faq);
    // static user_id
    this.faq.campaign_id = this.cmp_id;
    // call service to crate campaign and redirect user to enter next inputs
    this.campaignService.createFaq(this.faq).subscribe((data: any) => {
      if (data.affectedRows > 0) {
        // user friendly msg that reward was inserted
        this.inserted = true;
        this.count = this.count + 1;
      } else {
        this.inserted = false;
      }
    });
    // now reset the form
    faqsForm.reset();
  }

  // done - go to faq
  goToStory() {
    //redirect with this campaign_id
    this.router.navigate(["/create-campaign/add-story/" + this.cmp_id]);
  }
}
