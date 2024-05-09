import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', loadComponent: () => import('./product/product-listings/product-listings.component').then(mod => mod.ProductListComponent) },
    // { path: 'detail', loadComponent: () => import('./product/product-detail/product-detail.component').then((m) => m.ProductDetailComponent), },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', loadChildren: () => import('./product/product.component').then((m) => m.routes)},
];
