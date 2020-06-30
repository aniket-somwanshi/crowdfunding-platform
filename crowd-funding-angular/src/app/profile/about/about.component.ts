
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { Profile } from 'src/app/model/profile';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private authService:AuthService,private main: MainService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  //About:any =[];
  about: Profile;
  profileid: string;
  disable: boolean = false;
  username: string;
  aboutform: FormGroup;
  popup:number;
  savebutton:number =0;
  ngOnInit() {

    this.aboutform = this.fb.group({
      fullname: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      phone: [{ value: '', disabled: true }],
      website: [{ value: '', disabled: true }],
      location: [{ value: '', disabled: true }],
      bio: [{ value: '', disabled: true }]
    })


    this.authService.getUserId().subscribe(
      (data:any) => {
        if (data.user_id && data.status=="1") {
          this.profileid = data.user_id;
          this.main.getabout(data.user_id).subscribe((data: Profile) => {
            this.about = data[0];
            console.log(this.about)
            // this.About =data;
            this.aboutform.patchValue({
              fullname: data[0].user_name,
              email: data[0].user_email,
              phone: data[0].user_phone,
              website: data[0].website,
              bio: data[0].bio,
              location:data[0].location
            })
            console.log(typeof (data));
          })
        }
        else {
          this.about = undefined;
          console.log("no id")
        }
      }
    )
  }
  //submit form data 
  onSubmit() {
    this.mapform();
    this.main.updateabout(this.profileid, this.about).subscribe((data:any)=>{
      if(data.affectedRows ==1){
     
      this.popup =1;}
      else
      this.popup =0;
    });
  }
  
  //map form data to model
  mapform(){
    this.about.user_name = this.aboutform.value.fullname;
    this.about.user_email = this.aboutform.value.email;
    this.about.user_phone= this.aboutform.value.phone;
    this.about.website = this.aboutform.value.website;
    this.about.bio = this.aboutform.value.bio;
  }

  //toggle the input box  disabled property
  enable() {
    this.aboutform[!this.disable ? 'enable' : 'disable']();
    this.savebutton =1;
    this.disable = !this.disable;
  }
}
