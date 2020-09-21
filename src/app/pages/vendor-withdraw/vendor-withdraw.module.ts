import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorWithdrawPageRoutingModule } from './vendor-withdraw-routing.module';

import { VendorWithdrawPage } from './vendor-withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorWithdrawPageRoutingModule
  ],
  declarations: [VendorWithdrawPage]
})
export class VendorWithdrawPageModule {}
