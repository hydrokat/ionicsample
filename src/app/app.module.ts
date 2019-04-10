import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { ContactProvider } from '../providers/contact/contact';
import { ContactsPage } from '../pages/contacts/contacts';
import { ContactsPageModule } from '../pages/contacts/contacts.module';
import { ContactAddComponent } from '../components/contact-add/contact-add';
import { ComponentsModule } from '../components/components.module';
import { ContactEditComponent } from '../components/contact-edit/contact-edit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'websql', 'localstorage', 'sqlite']
    }),
    IonicModule.forRoot(MyApp),
    ContactsPageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    ContactAddComponent,
    ContactEditComponent
  ],
  schemas: [],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider
  ]
})
export class AppModule {}
