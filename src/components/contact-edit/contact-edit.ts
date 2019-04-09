import { Component } from '@angular/core';

/**
 * Generated class for the ContactEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contact-edit',
  templateUrl: 'contact-edit.html'
})
export class ContactEditComponent {

  text: string;

  constructor() {
    console.log('Hello ContactEditComponent Component');
    this.text = 'Hello World';
  }

}
