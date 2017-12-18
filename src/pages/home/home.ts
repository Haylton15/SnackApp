import { EditShoppingPage } from './../edit-shopping/edit-shopping';
import { InicioPage } from './../inicio/inicio';
import { gasto } from './../../models/gasto';
import { Profile } from './../../models/profile';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {ShoppingListPage} from '../shopping-list/shopping-list';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profileData: FirebaseObjectObservable<Profile>
  gastosItemRef$ : FirebaseListObservable<gasto[]>
  totoAmount = 0;
  gastos = {} as gasto;
  constructor(private afAuth: AngularFireAuth, 
              private afDatabase: AngularFireDatabase, 
              private toast: ToastController,
              public navCtrl: NavController,
               public navParams: NavParams,
               private actionSheetCtrl: ActionSheetController) {
      //ponto de referência para a lista-compra de origem node no firebase
     /* this.gastosItemRef$ = this.afDatabase.list(`lista-gasto/${uid}`); 
      this.gastosItemRef$.subscribe(x => console.log(x));

      this.gastosItemRef$ = */

  
    
    
  
     /* this.afAuth.authState.take(1).subscribe(auth =>{
        this.afDatabase.list(`lista-gasto/${auth.uid}`)
      } );*/
 
      /*this.gastosItemRef$ = this.afDatabase.list(`lista-gasto/${this.afAuth.auth.currentUser.uid}`); 
      this.gastosItemRef$.subscribe(x => console.log(x));*/

      this.afAuth.authState.subscribe(auth => {
       
  
          this.gastosItemRef$ = this.afDatabase.list(`lista-gasto/${auth.uid}`)
        });
  
    
  }



  selecioGastoItem(itemGasto: gasto ){
    this.actionSheetCtrl.create({
      title: `${itemGasto.descricaoResumida}`,
      buttons:[
        {
          text: 'Editar',
          handler: ()=>{
            //envia ao usuario o editShoppingItemPage e passa a key como um parâmetro
            this.navCtrl.push(EditShoppingPage, { gastoItemId: itemGasto.$key})
          } 
        },
        {
          text: 'Apagar',
          role: 'destructive',
          handler: () =>{
              //Delete the current Shoppingitem
              this.gastosItemRef$.remove(itemGasto.$key); 
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log("O usuário selecionou o botão de cancelar");
          }
        }
      ]
    }).present();
  }




  ionViewWillLoad() {
     
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Bem vindo ao SafeControl, ${data.email}`,
          duration: 3000
        }).present();

        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
      }
      else {
        this.toast.create({
          message: `Não foi possível encontrar detalhes da autenticação.`,
          duration: 3000
        }).present();
      }
    })
  }

  pageGasto(){
    this.navCtrl.push('AdcGastosPage');
  }

  navigateToListShoppingPage(){
    this.navCtrl.push(ShoppingListPage);
  }

  logout() {
  this.navCtrl.setRoot(InicioPage);

  }

 /* signOut(){
    this.afAuth.auth.signOut().then(res => {
      this.navCtrl.setRoot("LoginPage"); 
    });
  }*/

}