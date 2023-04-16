import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
    selector: 'closemod',
    templateUrl: './closemod.component.html',
    styleUrls: ['./closemod.component.css']
})
export class ClosemodComponent {

    constructor(private modalCtrl: ModalController){}

    dismiss(){
        this.modalCtrl.dismiss();
    }
    
}