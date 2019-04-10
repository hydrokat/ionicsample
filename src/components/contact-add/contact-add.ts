import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';

/**
 * Generated class for the ContactAddComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-add',
  templateUrl: 'contact-add.html'
})
export class ContactAddComponent {

  name;
  address;
  number;

  constructor(
    public viewCtrl: ViewController,
    public contactService: ContactProvider,
    params: NavParams
  ) {
    console.log(params.get('testParam'));
  }

  save() {
    let contact = {
      name: this.name,
      address: this.address,
      number : this.number
    };

    this.contactService.add(contact);
  }

  dismiss() {
    let contact = {
      name: this.name,
      address: this.address,
      number: this.number
    };

    let data = contact;
    this.viewCtrl.dismiss(data);
  }

}
