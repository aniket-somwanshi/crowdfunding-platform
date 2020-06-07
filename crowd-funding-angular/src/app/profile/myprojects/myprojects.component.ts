import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

  constructor(private main: MainService, private route : ActivatedRoute) { }
  profileid:any;
  Myprojects:any=[];
  ngOnInit() {
    this.route.parent.paramMap.subscribe(
      (params: Params) => {
        if (params.has('id')){
          this.profileid=params.get('id');
    this.main.getmyprojects(this.profileid).subscribe(
      (data) =>{
          this.Myprojects=data;
          console.log(this.Myprojects);
        })}
        else{
            this.Myprojects =undefined;
            console.log(this.Myprojects)
        }  
       // console.log(this.Profile);
      })
  }

}
