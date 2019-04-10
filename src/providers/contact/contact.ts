// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UUID } from 'angular2-uuid';

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
    contact.id = UUID.UUID();
    this.storage.set("contact_" + contact.id, contact);
    this.load()
  }

  edit(contact) {
    this.delete(contact.id);
    this.add(contact);
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
