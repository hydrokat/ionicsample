import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    console.log(params.get('testParam'));
  }

  dismiss() {
    let data = "Goodbye!";
    this.viewCtrl.dismiss(data);
  }

}
