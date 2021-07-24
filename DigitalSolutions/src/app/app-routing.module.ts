import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
  },
  { 
    path: 'contact-us', 
    component: ContactUsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
