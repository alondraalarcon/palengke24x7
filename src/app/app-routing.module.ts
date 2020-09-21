import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full'
  },
  {
    path: 'vendor-dashboard/:id',
    loadChildren: () => import('./pages/vendor-dashboard/vendor-dashboard.module').then( m => m.VendorDashboardPageModule)
  },
  {
    path: 'single-product',
    loadChildren: () => import('./modal/single-product/single-product.module').then( m => m.SingleProductPageModule)
  },
  {
    path: 'vendor-dashboard',
    loadChildren: () => import('./pages/vendor-dashboard/vendor-dashboard.module').then( m => m.VendorDashboardPageModule)
  },
  {
    path: 'customer-dashboard',
    loadChildren: () => import('./pages/customer-dashboard/customer-dashboard.module').then( m => m.CustomerDashboardPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'vendor-starter',
    loadChildren: () => import('./pages/vendor-starter/vendor-starter.module').then( m => m.VendorStarterPageModule)
  },
  {
    path: 'vendor-registration',
    loadChildren: () => import('./pages/vendor-registration/vendor-registration.module').then( m => m.VendorRegistrationPageModule)
  },
  {
    path: 'vendor-home',
    loadChildren: () => import('./pages/vendor-home/vendor-home.module').then( m => m.VendorHomePageModule)
  },
  {
    path: 'vendor-edit-account',
    loadChildren: () => import('./pages/vendor-edit-account/vendor-edit-account.module').then( m => m.VendorEditAccountPageModule)
  },
  {
    path: 'vendor-store',
    loadChildren: () => import('./pages/vendor-store/vendor-store.module').then( m => m.VendorStorePageModule)
  },
  {
    path: 'vendor-settings',
    loadChildren: () => import('./pages/vendor-settings/vendor-settings.module').then( m => m.VendorSettingsPageModule)
  },
  {
    path: 'vendor-products',
    loadChildren: () => import('./pages/vendor-products/vendor-products.module').then( m => m.VendorProductsPageModule)
  },
  {
    path: 'vendor-orders',
    loadChildren: () => import('./pages/vendor-orders/vendor-orders.module').then( m => m.VendorOrdersPageModule)
  },
  {
    path: 'vendor-withdraw',
    loadChildren: () => import('./pages/vendor-withdraw/vendor-withdraw.module').then( m => m.VendorWithdrawPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
