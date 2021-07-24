import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AppHeaderComponent } from './shared/header/header.component';
import { AppHeader2Component } from './shared/header/header2.component';
import { AppFooterComponent } from './shared/footer/footer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ServicesOfferedCard2Component } from './services-offered-card/services-offered-card2.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeWhoWeAreComponent } from './home-who-we-are/home-whom-we-are.component';

import { FrontEndTechnologiesComponent } from './technologies/front-end-tech/front-end-technologies.component';
import { BackEndTechnologiesComponent } from './technologies/back-end-tech/back-end-technologies.component';
import { MobileTechnologiesComponent } from './technologies/mobile-tech/mobile-technologies.component';

import { TechnologiesModule } from './technologies/technologies.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponentService } from './app.component.service';
import {RouterModule,Routes} from '@angular/router';

const routes: Routes =[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'front-end-technologies',component:FrontEndTechnologiesComponent},
  {path:'back-end-technologies',component:BackEndTechnologiesComponent},
  {path:'mobile-technologies',component:MobileTechnologiesComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component: ContactUsComponent},
  {path:'**',redirectTo:'dashboard'} 
];

@NgModule({
  declarations: [
    AppComponent,
    //AppHeaderComponent,
    AppHeader2Component,
    AppFooterComponent,
    DashboardComponent,
    ServicesOfferedCard2Component,
    HomeCarouselComponent,
    HomeWhoWeAreComponent,
    FrontEndTechnologiesComponent,
    BackEndTechnologiesComponent,
    MobileTechnologiesComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    TechnologiesModule,RouterModule.forRoot(routes)
  ],
  providers: [
    AppComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
