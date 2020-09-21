import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorEditAccountPage } from './vendor-edit-account.page';

const routes: Routes = [
  {
    path: '',
    component: VendorEditAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorEditAccountPageRoutingModule {}
