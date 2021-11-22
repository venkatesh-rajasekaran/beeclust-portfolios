import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes , RouterModule} from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CatalogManagementService } from './catalog-management.service';
import { AddAttributeComponent } from './add-attribute/add-attribute.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AssociationComponent } from './association/association.component';
import { InventoryInfoComponent } from './inventory-info/inventory-info.component';
import { UnitOfmeasurementComponent } from './unit-ofmeasurement/unit-ofmeasurement.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './Reports/order-details/order-details.component';
import { OrdersOnholdComponent } from './Reports/orders-onhold/orders-onhold.component';
import { ReturnedProductsComponent } from './Reports/returned-products/returned-products.component';
import { TopProductsComponent } from './Reports/top-products/top-products.component';

const routes:Routes=[
  {path:'',component :HomepageComponent},
  {path:'home',component:HomepageComponent}, 
  {path:'add-items',component :AddItemComponent},
  {path:'unit-of-measures',component :UnitOfmeasurementComponent},
  {path:'associations',component :AssociationComponent},
  {path:'inventory',component :InventoryInfoComponent},
  {path:'add-attributes',component :AddAttributeComponent},
  {path:'reports/order-details-report',component :OrderDetailsComponent},
  {path:'reports/orders-on-hold-report',component:OrdersOnholdComponent},
  {path:'reports/returned-products-report',component:ReturnedProductsComponent},
  {path:'reports/top-products-report',component:TopProductsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AddAttributeComponent,
    AddItemComponent,
    AssociationComponent,
    InventoryInfoComponent,
    UnitOfmeasurementComponent,
    FooterComponent,
    OrderDetailsComponent,
    OrdersOnholdComponent,
    ReturnedProductsComponent,
    TopProductsComponent
    

  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  MaterialModule,
  RouterModule.forRoot(routes),
  HttpClientModule,
  FontAwesomeModule
],

  providers: [CatalogManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {   

}
