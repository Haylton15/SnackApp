import { EditShoppingPage } from './../edit-shopping/edit-shopping';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { gasto } from './../../models/gasto';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {AddShoppingPage} from '../add-shopping/add-shopping';



@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<gasto[]> 
  shoppinListSum = {} as gasto; 
  priceTotal: any
  items: any

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afDatabase: AngularFireDatabase,
              private actionSheetCtrl: ActionSheetController) {
                //ponto de referência para a lista-compra de origem node no firebase
      this.shoppingListRef$ = this.afDatabase.list('shopping-list/'); 
      this.shoppingListRef$.subscribe(x => console.log(x)); 



  }

  selectItemShooping(shoppingItem: ShoppingItem){
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons:[
        {
          text: 'Edit',
          handler: ()=>{
            //envia ao usuario o editShoppingItemPage e passa a key como um parâmetro
            this.navCtrl.push(EditShoppingPage, { shoppingItemId: shoppingItem.$key})
            
          } 
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () =>{
              //Delete the current Shoppingitem
              this.shoppingListRef$.remove(shoppingItem.$key); 
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log("O usuário selecionou o botão de cancelar");
          }
        }
      ]
    }).present();
  }

  /*getTotal() {
    let total = 0;
    for (var i = 0; i < this.shoppingListRef$.length; i++) {
        if (this.items[i].amount) {
            total += this.items[i].amount;
            this.totalamount = total;
        }
    }
    return total;
}*/
 
  navigateToAddShoppingPage(){
    this.navCtrl.push(AddShoppingPage);
  }

}
