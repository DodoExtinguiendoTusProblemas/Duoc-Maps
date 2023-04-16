import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../popover/popover.component";
import { Popover2Component } from "../popover2/popover2.component";

@Component({
    selector: 'point',
    templateUrl: './point.component.html',
    styleUrls: ['point.component.css']
})
export class PointComponent {

    constructor(public popoverController: PopoverController){}


    async popclick(event){
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            event
        });
        return await popover.present();
    }

    async pop2click(event){
        const popover = await this.popoverController.create({
            component: Popover2Component,
            event
        });
        return await popover.present();
    }
    
}