import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorStorePage } from './vendor-store.page';

const routes: Routes = [
  {
    path: '',
    component: VendorStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorStorePageRoutingModule {}
