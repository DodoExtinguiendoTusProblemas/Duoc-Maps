import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";

@Component({
    selector: 'restore',
    templateUrl: './restore.component.html',
    styleUrls: ['./restore.component.css']
})
export class RestoreComponent {
    email: string;

    constructor(
        private afauth: AngularFireAuth,
        private toastr: ToastController,
        private router: Router,
        private loadingCtrl: LoadingController
    ){}

    async resetPassword(){
        if(this.email){
            const cargando = await this.loadingCtrl.create({
                message: 'Por favor espere',
                spinner: 'crescent',
                showBackdrop: true
            });
            cargando.present();

            this.afauth.sendPasswordResetEmail(this.email).then(()=>{
                cargando.dismiss()
                this.toast('Por favor Verifique su correo Electronico!','success')
                this.router.navigate([''])
            })
            .catch((error)=>{
                cargando.dismiss();
                this.toast(error.message,'danger')
            })
        }else {
            this.toast('por favor ingrese su direccion de correo electronico','danger')
        }

    }

    async toast(message, status){
        const toast = await this.toastr.create({
            message:message,
            color: status,
            position: 'top',
            duration: 2000
        });

        toast.present();
    }
}