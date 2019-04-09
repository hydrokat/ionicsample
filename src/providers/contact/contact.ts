// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  contacts;

  constructor(
    // public http: HttpClient,
    public storage: Storage
  ) {
    console.log('Hello ContactProvider Provider');
    this.load();
  }

  load() {
    this.contacts = [];
    return this.storage.forEach((v, k, i) => {
      this.contacts.push(v);
    }).then(() => {
      return this.contacts;
    });
  }

  get() {
    return this.contacts;
  }

  add(contact) {
    console.log("Adding contact", contact);
    this.storage.set("contact_" + contact.id, contact);
    this.load()
  }

  edit(id) {
    this.storage.get('contacts').then((val) => {
      let contacts = val;

      contacts.find(function (contact, i) {
        if (contact.id == id) {
          // let index = i;
          console.log(contacts[i]);
          
          return i;
        }
      })

      this.load();
    });
  }

  delete(id) {
    console.log("Delete", id);
    
    this.storage.remove("contact_" + id);
    this.load();
  }

  purge() {
    this.storage.clear();
  }

}
