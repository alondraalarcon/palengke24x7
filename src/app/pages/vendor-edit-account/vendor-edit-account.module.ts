import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorEditAccountPageRoutingModule } from './vendor-edit-account-routing.module';

import { VendorEditAccountPage } from './vendor-edit-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorEditAccountPageRoutingModule
  ],
  declarations: [VendorEditAccountPage]
})
export class VendorEditAccountPageModule {}
