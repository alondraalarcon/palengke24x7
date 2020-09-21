import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorSettingsPageRoutingModule } from './vendor-settings-routing.module';

import { VendorSettingsPage } from './vendor-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorSettingsPageRoutingModule
  ],
  declarations: [VendorSettingsPage]
})
export class VendorSettingsPageModule {}
