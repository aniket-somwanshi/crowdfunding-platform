import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CampaignService } from "../services/campaign.service";
import { NgForm } from "@angular/forms";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-faqs',
  templateUrl: './new-faqs.component.html',
  styleUrls: ['./new-faqs.component.css']
})
export class NewFAQsComponent implements OnInit {
  user_id;
  camp_user_id;
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
  }

  addFaqs(faqsForm: NgForm) {
    console.log(this.user_id +this.camp_user_id);
    if(this.user_id==this.camp_user_id){

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
  }

  // done - go to faq
  goToStory() {
    //redirect with this campaign_id
    this.router.navigate(["/edit-campaign/"+ this.cmp_id]);
  }
}
