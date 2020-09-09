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
export class CampaignService {
  url: string = "http://localhost:3000/api/";
  constructor(public http: HttpClient) {}

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

  search(search) {
    return this.http.get(this.url + "search/" + search);
  }

  createReward(reward) {
    return this.http.post(this.url + "add-reward", reward);
  }

  createFaq(faq) {
    return this.http.post(this.url + "add-faq", faq);
  }

  // get campaign services
  getTrendingCampaigns() {
    return this.http.get(this.url + "get-trending-campaigns");
  }
  getNewestCampaigns() {
    return this.http.get(this.url + "get-newest-campaigns");
  }

  //by category
  getNewestCampaignsByCategory(category) {
    return this.http.get(
      this.url + "get-newest-campaigns-by-category/" + category
    );
  }
  getTrendingCampaignsByCategory(category) {
    return this.http.get(
      this.url + "get-trending-campaigns-by-category/" + category
    );
  }
  getCampaignById(id) {
    return this.http.get(this.url + "get-campaign-by-id/" + id);
  }

  // add comment to a campaign
  addComment(comment) {
    return this.http.post(this.url + "add-comment", comment);
  }


  //delet campaign
  deleteCampaign(campaign_id){ 
      return this.http.get(this.url + "delete-campaign/" + campaign_id);
  }

  //update campaign
  updateCampaign(campaign){
    return this.http.post(this.url+ "update-campaign", campaign);
  }
}
