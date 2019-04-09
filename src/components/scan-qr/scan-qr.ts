import { Component } from '@angular/core';

/**
 * Generated class for the ScanQrComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scan-qr',
  templateUrl: 'scan-qr.html'
})
export class ScanQrComponent {

  text: string;

  constructor() {
    console.log('Hello ScanQrComponent Component');
    this.text = 'Hello World';
  }

}
