import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController, PopoverController, AlertController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";
import { ClosemodComponent } from "../modals/closemod/closemod.component";
import { PerfilmodComponent } from "../modals/perfilmod/perfilmod.component";

@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
    
    constructor(
      public popoverController: PopoverController,
      private modalCtrl: ModalController,
      public alertController: AlertController,
      private route:Router,
      private auth: AuthService
      ){}
    
    async perfilModal(){
        const mPerfil = await this.modalCtrl.create({
            component: PerfilmodComponent,
            cssClass: 'small-modal'
        });
        await mPerfil.present();
    }

    async ayudaModal(){
        const mPerfil = await this.modalCtrl.create({
            component: ClosemodComponent,
            cssClass: 'small-modal'
        });
        await mPerfil.present();
    }

    close(){
        this.popoverController.dismiss();
    }

    async alertClose() {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Confirmación',
          message: '¿Está seguro que desea salir?',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
              }
            }, {
              text: 'Aceptar',
              handler: () => {
                this.auth.singOut()
                
                console.log('Confirm Okay');
              }
            }
          ]
        });
    
        await alert.present();
      }
    
    logout(){
        
        
    }

}