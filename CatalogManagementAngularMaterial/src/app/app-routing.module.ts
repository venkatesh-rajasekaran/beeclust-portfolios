import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { Home_pageComponent } from './home_page/home_page.component';
import { Product_itemComponent } from './product_item/product_item.component';
import { Association_itemComponent} from './association_item/association_item.component';
import { Uom_detailsComponent } from './uom_details/uom_details.component';
import { ClassificationComponent } from './classification/classification.component';
import { Catalog_configurationComponent } from './catalog_configuration/catalog_configuration.component';
import { FooterComponent } from './footer/footer.component';
import { SupplyReportComponent } from './bi-reports/supply-report/supply-report.component';
import { ProductesReportComponent } from './bi-reports/products-report/productes-report.component';
import { HoldReportComponent } from './bi-reports/hold-order-report/hold-report.component';
import { HoldDetailsReportComponent } from './bi-reports/hold-details-report/hold-details-report.component';
import { OpenOrderReportComponent } from './bi-reports/open-order-report/open-order-report.component';

const routes: Routes = [
  { path:'',redirectTo:'/home_page',pathMatch:'full'},
  { path: 'home_page', component:  Home_pageComponent},
  { path: 'product_item', component:  Product_itemComponent},
  { path: 'association_item', component:  Association_itemComponent},
  { path: 'uom_details', component:  Uom_detailsComponent},
  { path: 'classification', component:  ClassificationComponent},
  { path: 'catalog_configuration', component:  Catalog_configurationComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'supply-report', component:SupplyReportComponent},
  { path: 'productes-report', component:ProductesReportComponent},
  { path: 'hold-report',component:HoldReportComponent},
  { path: 'hold-details-report',component:HoldDetailsReportComponent},
  { path: 'open-order-report',component:OpenOrderReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
