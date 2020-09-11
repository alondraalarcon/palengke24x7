import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/introduction/introduction.module').then( m => m.IntroductionPageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
