import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
    name:string;
    email:string;
    password:string;

    constructor(
        private afs: AngularFirestore,
        private afauth: AngularFireAuth,
        private router: Router,
        private loadingCtrl: LoadingController,
        private toastr: ToastController
    ){}
    
    async register(){
        if(this.name && this.email && this.password){
            const loading = await this.loadingCtrl.create({
                message: 'Registrando..',
                spinner: 'crescent',
                showBackdrop: true
            });

            loading.present();

            this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=>{
                data.user.sendEmailVerification();
                this.afs.collection('user').doc(data.user.uid).set({
                    'userId': data.user.uid,
                    'userName': this.name,
                    'userEmail': this.email,
                    'createdAt': Date.now()
                })
                .then(()=> {
                    loading.dismiss();
                    this.toast('Registrado exitosamente', 'success');
                    this.router.navigate(['/']);
                })
                .catch(error =>{
                    loading.dismiss();
                    this.toast(error.message, 'danger');
                })
            })
            .catch(error => {
                loading.dismiss();
                this.toast(error.message, 'danger');
            })
        } else {
            this.toast('Por favor llene el formulario!', 'warning');
        }
    }// Fin del Registro

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