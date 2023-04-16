import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopoverComponent } from "../popover/popover.component";
import { Popover2Component } from "../popover2/popover2.component";

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
}) 
export class MainComponent{
    
    
    constructor(public popoverController: PopoverController){}

    option = {

        slidesPerView: 1.5,
        centeredSlides: true,
        loop:true,
        spaceBetween:10
    }

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