import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-backed',
  templateUrl: './backed.component.html',
  styleUrls: ['./backed.component.css']
})  

export class BackedComponent implements OnInit {

  constructor(private main: MainService, private route : ActivatedRoute) { }
   profileid:any;
   Backed:any=[];
  ngOnInit() {
    this.route.parent.paramMap.subscribe(
      (params: Params) => {
        if (params.has('id')){
          this.profileid=params.get('id');
    this.main.getbacked(this.profileid).subscribe(
      (data) =>{
          this.Backed=data;
          console.log(this.Backed);
        })}
        else{
            this.Backed =undefined;
            console.log(this.Backed)
        }  
       // console.log(this.Profile);
      })
  }

}
