import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { HomePage } from '../pages/home/home';
import { ExibirClientePage } from '../pages/exibir-cliente/exibir-cliente';
import { AdicionarClientePage } from '../pages/adicionar-cliente/adicionar-cliente';
import { ClienteProvider } from '../providers/cliente/cliente';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    ClienteProvider
  ]
})
export class AppModule {}
