import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { ContactAddComponent } from '../../components/contact-add/contact-add';
import { ContactEditComponent } from '../../components/contact-edit/contact-edit';

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
        name: "John Doe",
        number: "09153125489"
      },
      {        
        name: "Jane Doe",
        number: "09153178489"
      },
      {        
        name: "Johnie Doe",
        number: "09173995489"
      },
      {        
        name: "Dayne Denver",
        number: "09153178449"
      },
      {        
        name: "Michael Jackson",
        number: "09157841256"
      },
      {        
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
      console.log("New contact", data);
      this.contactService.load().then(() => {
        this.load();
      });
    })
  }

  edit(contact) {
    let contactModal = this.modalCtrl.create(ContactEditComponent, {
      contact: contact
    });
    contactModal.present();

    contactModal.onDidDismiss(data => {
      console.log("Edited contact", data);
      this.contactService.load().then(() => {
        this.load();
      });
    })    
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
