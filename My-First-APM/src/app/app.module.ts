import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
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
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
