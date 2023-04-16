import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { UsuarioService } from "src/app/servicio/usuario.service";
import { PopoverComponent } from "../popover/popover.component";
import { Popover2Component } from "../popover2/popover2.component";

@Component({
    selector: 'notice',
    templateUrl: './notice.component.html',
    styleUrls: ['notice.component.css']
})
export class NoticeComponent {

    aviso: any = [];

    private servicio: UsuarioService
    constructor(public popoverController: PopoverController, usuarioServicio: UsuarioService){
        this.servicio = usuarioServicio;
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

    doRefresh(event){
        this.getUsuario()
        setTimeout(()=>{
        event.target.complete();
        },2000);
    }

    getUsuario(){
        this.servicio.listarUsuarios()
        .subscribe(
            (data) => {this.aviso = data},
            (error)=> {console.log(error);}
        )
    }
    
}