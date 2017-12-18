import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShoppingPage } from './add-shopping';

@NgModule({
  declarations: [
    AddShoppingPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShoppingPage),
  ],
  exports: [
    AddShoppingPage
  ]
})
export class AddShoppingPageModule {}
