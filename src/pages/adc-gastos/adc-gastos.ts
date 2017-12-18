import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database';
import { gasto } from '../../models/gasto';


/**
 * Generated class for the AdcGastosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adc-gastos',
  templateUrl: 'adc-gastos.html',
})
export class AdcGastosPage {

  gastoItem = {} as gasto; 
  gastosItemRef$ : FirebaseListObservable<gasto[]>

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, 
     public navCtrl: NavController, public navParams: NavParams,
    ) {
      this.gastosItemRef$ = this.afDatabase.list('lista-gastos');
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad AdcGastosPage');
  }*/

  /*async gravarGasto(){
    try{
    this.afAuth.authState.take(1).subscribe( auth =>{
      this.afDatabase.object(`gastos/${auth.uid}`).set(this.gastoItem)
      .then(() => this.navCtrl.setRoot('HomePage'));
    })
  }catch (e){
    console.error(e);

  }
} método para gravar apenas um objeto */

 async gravaGasto(gastoItem: gasto){
  this.afAuth.authState.take(1).subscribe(auth =>{
    this.afDatabase.list(`lista-gasto/${auth.uid}`).push({
      descricaoResumida: this.gastoItem.descricaoResumida,
      valor: this.gastoItem.valor,
      formaPagamento: this.gastoItem.formaPagamento,
      descricaoGeral: this.gastoItem.descricaoGeral,  
      dataDia: this.gastoItem.dataDia
    }); 

    this.gastoItem = {} as gasto; 

    this.navCtrl.pop();

  } )
  
 }

}
