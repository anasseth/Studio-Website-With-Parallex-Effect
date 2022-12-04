import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NonProfitComponent } from './non-profit/non-profit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'artist',
    component: ArtistComponent
  },
  {
    path: 'non-profit',
    component: NonProfitComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-condition',
    component: TermsConditionComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
