import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Params } from "@angular/router";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  constructor(private main: MainService, private route: ActivatedRoute) {}
  Details: any = [];
  fundsid: string;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.fundsid) {
        this.fundsid = params.fundsid;
        this.main.getbackdetails(this.fundsid).subscribe((data) => {
          this.Details = data;
        });
      } else {
        this.Details = undefined;
      }
      // console.log(this.Profile);
    });
  }
}
