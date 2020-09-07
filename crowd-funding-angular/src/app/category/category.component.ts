import { Component, OnInit } from "@angular/core";
import { CampaignService } from "../services/campaign.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  newestCampaignsByCat = [];
  trendingCampaignsByCat = [];
  newestCampaigns = [];
  trendingCampaigns = [];
  cat;

  constructor(
    private authService: AuthService,
    private router: Router,
    public route: ActivatedRoute,
    public campaignService: CampaignService
  ) {}

  ngOnInit() {
    this.cat = this.route.snapshot.paramMap.get("category");
    this.campaignService
      .getNewestCampaignsByCategory(
        this.route.snapshot.paramMap.get("category")
      )
      .subscribe((data: any) => {
        this.newestCampaignsByCat = data;
        console.log(this.newestCampaignsByCat);
      });
    this.campaignService
      .getTrendingCampaignsByCategory(
        this.route.snapshot.paramMap.get("category")
      )
      .subscribe((data: any) => {
        this.trendingCampaignsByCat = data;
        console.log(this.trendingCampaignsByCat);
      });

    //import other campaigns
    this.campaignService.getTrendingCampaigns().subscribe((data: any) => {
      this.trendingCampaigns = data;
      // console.log(this.newestCampaigns);
    });

    this.campaignService.getNewestCampaigns().subscribe((data: any) => {
      this.newestCampaigns = data;
      // console.log(this.newestCampaigns);
    });
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
}
