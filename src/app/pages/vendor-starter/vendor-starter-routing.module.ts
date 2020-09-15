import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorStarterPage } from './vendor-starter.page';

const routes: Routes = [
  {
    path: '',
    component: VendorStarterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorStarterPageRoutingModule {}
