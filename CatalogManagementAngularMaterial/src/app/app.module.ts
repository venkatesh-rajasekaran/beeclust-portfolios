import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import { Product_itemComponent} from './product_item/product_item.component';
import { Uom_detailsComponent } from './uom_details/uom_details.component';
import { ClassificationComponent } from './classification/classification.component';
import { MenuComponent } from './menu/menu.component';
import { Association_itemComponent } from './association_item/association_item.component';
import { Catalog_configurationComponent } from './catalog_configuration/catalog_configuration.component';
import { Home_pageComponent } from './home_page/home_page.component';
import { CatalogService } from './catalog.service';
import { FooterComponent } from './footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    Product_itemComponent,
    Association_itemComponent,
    Uom_detailsComponent,
    MenuComponent,
    ClassificationComponent,
    Catalog_configurationComponent,
    Home_pageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule ,
     
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
 })
export class AppModule {
  
 }
