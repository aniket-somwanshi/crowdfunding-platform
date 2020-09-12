import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { CampaignService } from "../services/campaign.service";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  loginDiv:boolean;
  searchData = {
    data: null,
  };
  newestCampaigns = [];
  trendingCampaigns = [];
  searchedCampaigns = [];
  orderBy = [];
  constructor(
    private authService: AuthService,
    public campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit() {
    this.campaignService.getTrendingCampaigns().subscribe((data: any) => {
      this.trendingCampaigns = data;
      this.orderBy = data;
      //console.log(this.trendingCampaigns);
    });

    this.campaignService.getNewestCampaigns().subscribe((data: any) => {
      this.newestCampaigns = data;
      //console.log(this.newestCampaigns.length);
    });

    if (localStorage.getItem("token")) {
      this.authService.getUserId().subscribe((data: any) => {
        if (data.status == "1") {
            this.loginDiv=false;
        } else {
          this.loginDiv=true;
        }
      });
    } else {
      this.loginDiv=true;
    }


  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: false,
    infinite: true,
  };

  goToCategory(category) {
    this.router.navigate(["/category/" + category]);
  }

  getOriginalImagePath(path) {
    return `http:localhost:3000/${path}`;
  }

  searchFunction() {
    console.log(this.searchData);
    this.campaignService.search(this.searchData.data).subscribe((data: any) => {
      console.log(data);
      this.searchedCampaigns = data;
    });
  }

  clearSearch(e) {
    e.preventDefault();
    this.searchedCampaigns = [];
  }

  newOrTrending(value: string) {
    switch (value) {
      case "newer":
        this.orderBy = this.newestCampaigns;
        console.log(this.orderBy);
        break;
      case "trending":
        this.orderBy = this.trendingCampaigns;
        console.log(this.orderBy);

        break;
    }
  }

  goToCampaign(id) {
    if (localStorage.getItem("token")) {
      this.authService.getUserId().subscribe((data: any) => {
        if (data.status == "1") {
          this.router.navigate(["/campaign/" + id]);
        } else {
          this.router.navigate(["login"]);
        }
      });
    } else {
      this.router.navigate(["login"]);
    }
  }

  goToLogin(){
    this.router.navigate(["login"]);

  }
}
