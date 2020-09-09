import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpResponse,
  HttpRequest,
  HttpHeaders,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FundsService {
  url: string = "http://localhost:3000/api/";
  constructor(public http: HttpClient) {}

  pledge(pledgePost) {
    return this.http.post(this.url + "pledge", pledgePost);
  }

  pledgeWithoutRewards(pledgeWtRewards) {
    return this.http.post(this.url + "pledge-without-rewards", pledgeWtRewards);
  }

  getCreatorsCampaigns(user_id) {
    return this.http.get(this.url + "get-creators-campaigns/" + user_id);
  }

  createCampaign(campaign) {
    // const options = {
    //   headers: new HttpHeaders().append('Content-Type':'application/json')
    // }
    // let body = JSON.stringify(food);
    return this.http.post(this.url + "create-campaign", campaign);
  }

  stripePayment(paymentData) {
    return this.http.post(this.url + "payment", paymentData);
  }

  manageCampaigns(user_id) {
    return this.http.get(this.url + "manage-campaigns/" + user_id);
  }
}
