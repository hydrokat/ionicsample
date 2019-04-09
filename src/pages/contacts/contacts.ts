import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { UUID } from 'angular2-uuid';
import { ContactAddComponent } from '../../components/contact-add/contact-add';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contactService: ContactProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
    ) {
    //sample contacts
    let sampleContacts = [
      {
        id: UUID.UUID(),
        name: "John Doe",
        number: "09153125489"
      },
      {
        id: UUID.UUID(),
        name: "Jane Doe",
        number: "09153178489"
      },
      {
        id: UUID.UUID(),
        name: "Johnie Doe",
        number: "09173995489"
      },
      {
        id: UUID.UUID(),
        name: "Dayne Denver",
        number: "09153178449"
      },
      {
        id: UUID.UUID(),
        name: "Michael Jackson",
        number: "09157841256"
      },
      {
        id: UUID.UUID(),
        name: "Michael Doe",
        number: "09157784689"
      }
    ];

    this.contactService.purge();

    sampleContacts.forEach(contact => {
      this.contactService.add(contact);
    });
  }

  ionViewDidLoad() {
    console.log("Loading contacts...");
    this.load();
  }

  load() {
    this.contacts = [];
    this.contacts = this.contactService.get();    
  }

  add() {
    let contactModal = this.modalCtrl.create(ContactAddComponent, {
      testParam: "Hello world!"
    });
    contactModal.present();

    contactModal.onDidDismiss(data => {
      console.log(data);
    })
  }

  edit(id) {
    // this.contactService.edit(id);
    console.log("Edit", id);
    
  }

  delete(id) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete the contact?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.contactService.delete(id);
            this.load();
          }
        }
      ]
    });

    alert.present();
  }

}
