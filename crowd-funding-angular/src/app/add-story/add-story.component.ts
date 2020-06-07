import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from '../services/campaign.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  image1;
   image2; 
   image3; 
   image4;
  // define stucture of campaign to be created
  story={
    'campaign_id':0,
    'desc_1':'',
    'desc_2':'',
    'desc_3':'',
    'desc_4':''
  };

  cmp_id;
  constructor(
    public http:HttpClient,
    public campaignService:CampaignService,
    private router:Router,
    public route:ActivatedRoute) { }

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

  selectImage1(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image1 = file;
    }
  }
  selectImage2(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image2 = file;
    }
  }
  selectImage3(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image3 = file;
    }
  }
  selectImage4(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image4 = file;
    }
  }

  //on submit
  addStory(storyForm:NgForm){
    const formData = new FormData();
    formData.append('campaign_id', this.cmp_id);
    formData.append('desc_1', this.story.desc_1);
    formData.append('desc_2', this.story.desc_2);
    formData.append('desc_3', this.story.desc_3);
    formData.append('desc_4', this.story.desc_4);
    formData.append('image_1', this.image1);
    formData.append('image_2', this.image2);
    formData.append('image_3', this.image3);
    formData.append('image_4', this.image4);

    this.http.post<any>('http://localhost:3000/api/add-story', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    //reset form
    storyForm.reset();
    //redirect 
    this.router.navigate(['']); 
  }

}
