import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashboardPage } from './customer-dashboard.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CustomerDashboardPage,
    children: [
      {
        path:'home',
        children:[
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path:'products',
        children:[
          {
            path: '',
            loadChildren: () => import('../products/products.module').then( m => m.ProductsPageModule)
          }
        ]
      },
      {
        path:'cart',
        children:[
          {
            path: '',
            loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
          }
        ]
      },
      {
        path:'account',
        children:[
          {
            path: '',
            loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
          }
        ]
      },{
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerDashboardPageRoutingModule {}
