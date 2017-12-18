import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditShoppingPage } from './edit-shopping';

@NgModule({
  declarations: [
    EditShoppingPage,
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingPage),
  ],
  exports: [
    EditShoppingPage,
  ],
})
export class EditShoppingPageModule {}
