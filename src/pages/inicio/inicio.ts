import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { SobrePage } from '../sobre/sobre';
import { HomePage } from '../home/home';
import { PoliticaPage } from '../politica/politica';
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

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
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToPolitica(params){
    if (!params) params = {};
    this.navCtrl.push(PoliticaPage);
  }
}
