import { NgModule } from '@angular/core';
import { ContactAddComponent } from './contact-add/contact-add';
import { ContactEditComponent } from './contact-edit/contact-edit';
import { ScanQrComponent } from './scan-qr/scan-qr';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [ContactAddComponent,
    ContactEditComponent,
    ScanQrComponent],
	imports: [IonicModule],
	exports: [ContactAddComponent,
    ContactEditComponent,
    ScanQrComponent]
})
export class ComponentsModule {}
