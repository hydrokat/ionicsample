import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ContactsPage } from './contacts';

@NgModule({
  declarations: [
    ContactsPage,
  ],
  imports: [
    IonicModule.forRoot(ContactsPage),
    IonicPageModule.forChild(ContactsPage),
  ],
})
export class ContactsPageModule {}
