import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  //criando um novo objeto
  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$ : FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private database: AngularFireDatabase    ) {
                this.shoppingItemRef$ = this.database.list('shopping-list');    

  }

  addShoppingItem(shoppingItem: ShoppingItem){
   /*log dos resultados na saída do console 
    console.log(shoppingItem);*/

    /*criando um novo objeto e convertendo em itemNumber em number 
      Depois dando um push(enviando os dados) para o firebase database
    */

    this.shoppingItemRef$.push({
      itemName:   this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)

    });

    //resetando o shopping-item, é como se eu estivesse dizendo que acaba esse objeto e começa um novo agora se quiser
    this.shoppingItem = {} as ShoppingItem;

    //navegando de volta para a página ShoppingListPage
    this.navCtrl.pop(); 
  }

}
