import { SuccesspageComponent } from "./successpage/successpage.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateCampaignComponent } from "./create-campaign/create-campaign.component";
import { ShowCreatorsCampaignsComponent } from "./show-creators-campaigns/show-creators-campaigns.component";
import { HomeCreatorComponent } from "./home-creator/home-creator.component";
import { AddRewardsComponent } from "./add-rewards/add-rewards.component";
import { AddFaqComponent } from "./add-faq/add-faq.component";
import { AddStoryComponent } from "./add-story/add-story.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LoginCreatorComponent } from "./login-creator/login-creator.component";
import { HomeBackerComponent } from "./home-backer/home-backer.component";
import { CampaignService } from "./services/campaign.service";
import { CampaignComponent } from "./campaign/campaign.component";
import { CategoryComponent } from "./category/category.component";
import { LearnMoreComponent } from "./learn-more/learn-more.component";
import { PledgeComponent } from "./pledge/pledge.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./profile/about/about.component";
import { BackedComponent } from "./profile/backed/backed.component";
import { DetailsComponent } from "./profile/backed/details/details.component";
import { MyprojectsComponent } from "./profile/myprojects/myprojects.component";
import { ManageCampaignComponent } from "./manage-campaign/manage-campaign.component";
import { EditCampaignComponent } from "./edit-campaign/edit-campaign.component";
import { NewFAQsComponent } from "./new-faqs/new-faqs.component";
import { NewRewardsComponent } from "./new-rewards/new-rewards.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "login-creator", component: LoginCreatorComponent },
  { path: "register", component: RegisterComponent },
  { path: "creator", component: HomeCreatorComponent },
  { path: "backer", component: HomeBackerComponent },
  {
    path: "create-campaign",
    children: [
      { path: "", component: CreateCampaignComponent },
      { path: "add-rewards/:campaign_id", component: AddRewardsComponent },
      { path: "add-faq/:campaign_id", component: AddFaqComponent },
      { path: "add-story/:campaign_id", component: AddStoryComponent },
    ],
  },
  {
    path: "show-creators-campaigns",
    component: ShowCreatorsCampaignsComponent,
  },
  { path: "campaign/:id", component: CampaignComponent },
  { path: "category/:category", component: CategoryComponent },
  { path: "learn-more/:campaign_id", component: LearnMoreComponent },
  { path: "pledge/:campaign_id", component: PledgeComponent },
  { path: "success", component: SuccesspageComponent },
  {
    path: "profile",
    component: ProfileComponent,
    children: [
      { path: "about", component: AboutComponent },
      {
        path: "backed",
        component: BackedComponent,
        children: [{ path: "details/:fundsid", component: DetailsComponent }],
      },
      { path: "myprojects", component: MyprojectsComponent },
    ],
  },
  { path: "manage-campaigns", component: ManageCampaignComponent },
  { path: "edit-campaign/:campaign_id", component: EditCampaignComponent },

  { path: "new-faqs/:campaign_id", component: NewFAQsComponent },
  { path: "new-rewards/:campaign_id", component: NewRewardsComponent },

  { path: "verify-email", component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
