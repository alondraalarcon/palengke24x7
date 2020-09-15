import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorRegistrationPageRoutingModule } from './vendor-registration-routing.module';

import { VendorRegistrationPage } from './vendor-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorRegistrationPageRoutingModule
  ],
  declarations: [VendorRegistrationPage]
})
export class VendorRegistrationPageModule {}
