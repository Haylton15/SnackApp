import { AngularFireAuth } from 'angularfire2/auth';
import { gasto } from './../../models/gasto';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-edit-shopping',
  templateUrl: 'edit-shopping.html',
})
export class EditShoppingPage {

    shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;
    gastoItemRef$: FirebaseObjectObservable<gasto>;
    gastoItem  = {} as gasto; 
    shoppingItem = {} as ShoppingItem; 

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private afDatabase: AngularFireDatabase) {

      //capturar o shoppingItemId passado pelo edit no shooping-list.ts
    const gastoItemId = this.navParams.get('gastoItemId');

    console.log(gastoItemId); 
  
      
 
         this.gastoItemRef$ = this.afDatabase.object(`lista-gasto/${afAuth.auth.currentUser.uid}/${gastoItemId}`)
     

    //definir o escopo do nosso objeto firebase igual ao nosso item selecionado
    //this.gastoItemRef$ = this.afDatabase.object(`lista-gasto/${gastoItemId}`);

    //inscreva-se no objeto e atribua o resultado a this.shoppingItem

    this.gastoItemRef$.subscribe(gastoItem => this.gastoItem = gastoItem);

  }

  //update o meu firebase node com novo dado.Item
  editShoppingItem(gastoItem: gasto){
    
        this.gastoItemRef$.update(gastoItem);
    
        //envia o usuário de volta para a página anterior(ShoppingListPage)
        this.navCtrl.pop();
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingPage');
  }

}
