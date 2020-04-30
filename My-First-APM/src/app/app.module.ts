import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // { path: 'products', component: ProductListComponent },
      // { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent },
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
