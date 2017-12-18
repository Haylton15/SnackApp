import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoliticaPage } from '../politica/politica';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage {

  constructor(public navCtrl: NavController) {
  }
  goToPolitica(params){
    if (!params) params = {};
    this.navCtrl.push(PoliticaPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.push(SobrePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
