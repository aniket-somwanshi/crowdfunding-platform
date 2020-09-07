import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MainService } from "src/app/services/main.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-backed",
  templateUrl: "./backed.component.html",
  styleUrls: ["./backed.component.css"],
})
export class BackedComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private main: MainService,
    private route: ActivatedRoute
  ) {}
  profileid: any;
  Backed: any = [];
  detailsVisible = false;
  ngOnInit() {
    this.authService.getUserId().subscribe((data: any) => {
      if (data.user_id && data.status == "1") {
        this.profileid = data.user_id;
        this.main.getbacked(data.user_id).subscribe((data) => {
          this.Backed = data;
          console.log(this.Backed);
        });
      } else {
        this.Backed = undefined;
        console.log(this.Backed);
      }
      // console.log(this.Profile);
    });
  }

  showDetails() {
    this.detailsVisible ? null : (this.detailsVisible = true);
  }
}
