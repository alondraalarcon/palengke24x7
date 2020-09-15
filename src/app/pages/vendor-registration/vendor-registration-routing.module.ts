import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorRegistrationPage } from './vendor-registration.page';

const routes: Routes = [
  {
    path: '',
    component: VendorRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRegistrationPageRoutingModule {}
