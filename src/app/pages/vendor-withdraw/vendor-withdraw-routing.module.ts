import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorWithdrawPage } from './vendor-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: VendorWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorWithdrawPageRoutingModule {}
