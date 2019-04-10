import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';

@Component({
  selector: 'contact-edit',
  templateUrl: 'contact-edit.html'
})
export class ContactEditComponent {

  name;
  address;
  number;

  constructor(
    public viewCtrl: ViewController,
    public contactService: ContactProvider,
    params: NavParams
  ) {
    console.log(params.get('contact'));
    let thisContact = params.get('contact');    

    this.name    = thisContact.name;
    this.address = thisContact.address;
    this.number  = thisContact.number;
  }

  save() {
    let contact = {
      name   : this.name,
      address: this.address,
      number : this.number
    };

    this.contactService.edit(contact);
  }

  dismiss() {
    let contact = {
      name   : this.name,
      address: this.address,
      number : this.number
    };

    let data = contact;
    this.viewCtrl.dismiss(data);
  }

}
