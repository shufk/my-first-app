import { Component } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: ':productId', component: ProductDetailComponent },
  { path: '', component: ProductListComponent },
];

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export  class ProductComponent {

}
