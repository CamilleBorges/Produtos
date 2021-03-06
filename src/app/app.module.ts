import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductInterestsListComponent } from './product-interests-list/product-interests-list.component';
import { ProductInterestsFormComponent } from './product-interests-form/product-interests-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsFormComponent,
    ProductInterestsListComponent,
    ProductInterestsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
