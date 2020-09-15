import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorStarterPageRoutingModule } from './vendor-starter-routing.module';

import { VendorStarterPage } from './vendor-starter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorStarterPageRoutingModule
  ],
  declarations: [VendorStarterPage]
})
export class VendorStarterPageModule {}
