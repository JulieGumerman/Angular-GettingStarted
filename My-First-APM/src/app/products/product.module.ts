import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent }
    ])    
  ]
})
export class ProductModule { }
