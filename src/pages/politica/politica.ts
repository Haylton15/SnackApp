import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { SobrePage } from '../sobre/sobre';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-politica',
  templateUrl: 'politica.html'
})
export class PoliticaPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }goToPolitica(params){
    if (!params) params = {};
    this.navCtrl.push(PoliticaPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCadastrar(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }
}
