import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { products } from '../../product';

@Component({
  selector: 'app-product-listings',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent implements OnInit{
  products: any;

  constructor() {}

  ngOnInit(){
    this.products = products
  }

}
