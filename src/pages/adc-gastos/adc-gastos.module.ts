import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdcGastosPage } from './adc-gastos';

@NgModule({
  declarations: [
    AdcGastosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdcGastosPage),
  ],
  exports: [
    AdcGastosPage
  ]

})
export class AdcGastosPageModule {}
