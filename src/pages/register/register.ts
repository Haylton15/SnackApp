import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('form') form: NgForm;
  user = {} as User;
  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth,  private afDatabase: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth. createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot('HomePage'));
    })
    }
   catch (e) {
      console.error(e);
    }
  }

  
  ResetarPassword(user: User) {
    if (this.form.form.valid) {

      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
      this.afAuth.auth.sendPasswordResetEmail(user.email)
        .then(() => {
          toast.setMessage('Solicitação foi enviada para o seu e-mail.')
          toast.present();

          this.navCtrl.pop();
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            toast.setMessage('O e-mail digitado não é valido.');
          } else if (error.code == 'auth/user-not-found') {
            toast.setMessage('O usuário não foi encontrado.');
          }

          toast.present();
        });
    }
  }
}