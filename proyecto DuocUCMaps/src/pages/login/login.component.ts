import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    email:string;
    password: string;

    constructor(
        private auth: AuthService,
        private router: Router,
        private toastr: ToastController
    ){}

    login(){
        if(this.email && this.password){
            this.auth.singIn(this.email, this.password);
        } else {
            this.toast('Por favor ingrese su correo y contraseña', 'warning');
        }
    }

    async toast(message, status){
        const toast = await this.toastr.create({
            message: message,
            color: status,
            position: 'top',
            duration: 2000
        });
        toast.present();
    }


}