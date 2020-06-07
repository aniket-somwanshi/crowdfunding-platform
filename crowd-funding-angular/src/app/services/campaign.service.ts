import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  url:string="http://localhost:3000/api/";
  constructor(public http:HttpClient) { }

  getCreatorsCampaigns(user_id){
    return this.http.get(this.url+"get-creators-campaigns/"+user_id);
  }

  createCampaign(campaign){
    // const options = {
    //   headers: new HttpHeaders().append('Content-Type':'application/json')
    // }
    // let body = JSON.stringify(food);
    return this.http.post(this.url+'create-campaign', campaign);
  }

  createReward(reward){
    return this.http.post(this.url+'add-reward', reward);
  }

  createFaq(faq){
    return this.http.post(this.url+'add-faq', faq);
  }


  // get campaign services
  getNewestCampaignsByCategory(category){
    return this.http.get(this.url+'get-newest-campaigns-by-category/'+category);
  }
  getPopularCampaignsByCategory(category){
    return this.http.get(this.url+'get-popular-campaigns-by-category/'+category);
  }
  getCampaignById(id){
    return this.http.get(this.url+'get-campaign-by-id/'+id);
  }


  // add comment to a campaign
  addComment(comment){
    return this.http.post(this.url+'add-comment',comment);
  }
}
