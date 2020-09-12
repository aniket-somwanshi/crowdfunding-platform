import { EditCampaignComponent } from "./edit-campaign/edit-campaign.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeCreatorComponent } from "./home-creator/home-creator.component";
import { CreateCampaignComponent } from "./create-campaign/create-campaign.component";
import { ShowCreatorsCampaignsComponent } from "./show-creators-campaigns/show-creators-campaigns.component";
import { CampaignService } from "./services/campaign.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AddRewardsComponent } from "./add-rewards/add-rewards.component";
import { AddFaqComponent } from "./add-faq/add-faq.component";
import { AddStoryComponent } from "./add-story/add-story.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LoginCreatorComponent } from "./login-creator/login-creator.component";
import { HomeBackerComponent } from "./home-backer/home-backer.component";
import { CampaignComponent } from "./campaign/campaign.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { CategoryComponent } from "./category/category.component";
import { LearnMoreComponent } from "./learn-more/learn-more.component";
import { PledgeComponent } from "./pledge/pledge.component";
import { AboutComponent } from "./profile/about/about.component";
import { BackedComponent } from "./profile/backed/backed.component";
import { MyprojectsComponent } from "./profile/myprojects/myprojects.component";
import { ProfileComponent } from "./profile/profile.component";
import { DetailsComponent } from "./profile/backed/details/details.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainService } from "./services/main.service";

import { ReactiveFormsModule } from "@angular/forms";
import { ManageCampaignComponent } from "./manage-campaign/manage-campaign.component";
import { NewRewardsComponent } from "./new-rewards/new-rewards.component";
import { NewFAQsComponent } from "./new-faqs/new-faqs.component";

//stripe payment module
// import { NgxStripeModule } from "ngx-stripe";
import { SuccesspageComponent } from "./successpage/successpage.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCreatorComponent,
    CreateCampaignComponent,
    ShowCreatorsCampaignsComponent,
    AddRewardsComponent,
    AddFaqComponent,
    AddStoryComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginCreatorComponent,
    HomeBackerComponent,
    CampaignComponent,
    CategoryComponent,
    LearnMoreComponent,
    PledgeComponent,
    AboutComponent,
    BackedComponent,
    MyprojectsComponent,
    ProfileComponent,
    DetailsComponent,
    ManageCampaignComponent,
    SuccesspageComponent,
    VerifyEmailComponent,
    EditCampaignComponent,
    NewRewardsComponent,
    NewFAQsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    //stripe payment module
  ],
  providers: [CampaignService, MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
