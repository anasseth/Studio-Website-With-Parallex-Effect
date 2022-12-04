import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { AboutComponent } from './home/about/about.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ProjectComponent } from './home/project/project.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './Common/footer/footer.component';
import { CurtainEffectsComponent } from './Common/curtain-effects/curtain-effects.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidenavComponent } from './Common/sidenav/sidenav.component';
import { SocialIconTooltipComponent } from './Common/social-icon-tooltip/social-icon-tooltip.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ArtistComponent } from './artist/artist.component';
import { CallToActionComponent } from './Common/call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    AboutComponent,
    PortfolioComponent,
    ProjectComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    CurtainEffectsComponent,
    NonProfitComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    NotFoundComponent,
    SidenavComponent,
    SocialIconTooltipComponent,
    ContactUsComponent,
    ArtistComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
