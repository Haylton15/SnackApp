import { RegisterPage } from './../pages/register/register';
import { EditShoppingPage } from './../pages/edit-shopping/edit-shopping';
import { AddShoppingPage } from './../pages/add-shopping/add-shopping';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule }from 'angularfire2/auth'; 

import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database';
import firebase  from 'firebase'; 
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { InicioPage } from '../pages/inicio/inicio';
import { SobrePage } from '../pages/sobre/sobre';
import { PoliticaPage } from '../pages/politica/politica';

firebase.initializeApp({
  apiKey: "AIzaSyAibCz9yT6BBZiZ2120AH4ElewxVT_NyJw",
  authDomain: "snackapp2-dda15.firebaseapp.com",
  databaseURL: "https://snackapp2-dda15.firebaseio.com",
  projectId: "snackapp2-dda15",
  storageBucket: "snackapp2-dda15.appspot.com",
  messagingSenderId: "936092599040"
})

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingPage,
    SobrePage,
    InicioPage,
    PoliticaPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    //import para interação com o banco de dados
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    LoginPage,
    ShoppingListPage,
    AddShoppingPage,
    SobrePage,
    EditShoppingPage,
    PoliticaPage,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}