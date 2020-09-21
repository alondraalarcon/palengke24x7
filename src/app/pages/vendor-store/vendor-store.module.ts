import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorStorePageRoutingModule } from './vendor-store-routing.module';

import { VendorStorePage } from './vendor-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorStorePageRoutingModule
  ],
  declarations: [VendorStorePage]
})
export class VendorStorePageModule {}
