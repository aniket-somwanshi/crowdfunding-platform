import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-successpage",
  templateUrl: "./successpage.component.html",
  styleUrls: ["./successpage.component.css"],
})
export class SuccesspageComponent implements OnInit {
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public http: HttpClient
  ) {}

  ngOnInit() {}
}
