import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorSettingsPage } from './vendor-settings.page';

const routes: Routes = [
  {
    path: '',
    component: VendorSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorSettingsPageRoutingModule {}
