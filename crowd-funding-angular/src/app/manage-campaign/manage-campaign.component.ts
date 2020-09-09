import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FundsService } from "../services/funds.service";

import * as XLSX from "xlsx";

@Component({
  selector: "app-manage-campaign",
  templateUrl: "./manage-campaign.component.html",
  styleUrls: ["./manage-campaign.component.css"],
})
export class ManageCampaignComponent implements OnInit {
  funds: any;

  constructor(
    private fundsService: FundsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.authService.getUserId().subscribe((data: any) => {
        if (data.status == "1") {
          this.fundsService
            .manageCampaigns(data.user_id)
            .subscribe((data: any) => {
              // this.funds = data;
              this.funds = [...data.funds, ...data.fundswrt];
              console.log(data);

              console.log(this.funds);
            });
        } else {
          this.router.navigate(["login"]);
        }
      });
    } else {
      this.router.navigate(["login"]);
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

  countries = [
    {
      name: "Russia",
      flag: "f/f3/Flag_of_Russia.svg",
      area: 17075200,
      population: 146989754,
    },
    {
      name: "Canada",
      flag: "c/cf/Flag_of_Canada.svg",
      area: 9976140,
      population: 36624199,
    },
    {
      name: "United States",
      flag: "a/a4/Flag_of_the_United_States.svg",
      area: 9629091,
      population: 324459463,
    },
    {
      name: "China",
      flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      area: 9596960,
      population: 1409517397,
    },
  ];

  /*name of the excel-file which will be downloaded. */
  fileName = "ExcelSheet.xlsx";

  exportExcel(): void {
    /* table id is passed over here */
    let element = document.getElementById("excel-table");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
