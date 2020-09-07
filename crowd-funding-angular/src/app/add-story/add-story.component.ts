import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CampaignService } from "../services/campaign.service";
import { NgForm, FormBuilder, FormGroup } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-add-story",
  templateUrl: "./add-story.component.html",
  styleUrls: ["./add-story.component.css"],
})
export class AddStoryComponent implements OnInit {
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  count = 0;
  buttonDisabled: boolean = true;
  // define stucture of campaign to be created
  story = {
    campaign_id: 0,
    desc_1: "",
    desc_2: "",
    desc_3: "",
    desc_4: "",
  };

  cmp_id;
  constructor(
    public http: HttpClient,
    public campaignService: CampaignService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    //get campaign id which is in the params
    this.cmp_id = this.route.snapshot.paramMap.get("campaign_id");
    console.log(this.cmp_id);
  }

  selectImage1(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image1 = file;
      this.count++;
      this.count >= 4
        ? (this.buttonDisabled = false)
        : (this.buttonDisabled = true);
      console.log(this.count + " " + this.buttonDisabled);
    }
  }
  selectImage2(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image2 = file;
      this.count++;
      this.count >= 4
        ? (this.buttonDisabled = false)
        : (this.buttonDisabled = true);
      console.log(this.count + " " + this.buttonDisabled);
    }
  }
  selectImage3(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image3 = file;
      this.count++;
      this.count >= 4
        ? (this.buttonDisabled = false)
        : (this.buttonDisabled = true);
      console.log(this.count + " " + this.buttonDisabled);
    }
  }
  selectImage4(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image4 = file;
      this.count++;
      this.count >= 4
        ? (this.buttonDisabled = false)
        : (this.buttonDisabled = true);
      console.log(this.count + " " + this.buttonDisabled);
    }
  }

  //on submit
  addStory(storyForm: NgForm) {
    console.log("count " + this.count + " called");
    if (this.count >= 4) {
      const formData = new FormData();
      formData.append("campaign_id", this.cmp_id);
      formData.append("desc_1", this.story.desc_1);
      formData.append("desc_2", this.story.desc_2);
      formData.append("desc_3", this.story.desc_3);
      formData.append("desc_4", this.story.desc_4);
      formData.append("image_1", this.image1);
      formData.append("image_2", this.image2);
      formData.append("image_3", this.image3);
      formData.append("image_4", this.image4);

      this.http
        .post<any>("http://localhost:3000/api/add-story", formData)
        .subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
      //reset form
      // storyForm.reset();
      //redirect
      this.router.navigate(["/"]);
    } else {
      alert("Add four images please");
    }
  }
}
