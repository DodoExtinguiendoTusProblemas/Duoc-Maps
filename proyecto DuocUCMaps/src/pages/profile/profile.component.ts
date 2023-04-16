import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    
    userId:string;
    name:string;
    email:string;
    phone:string;

    constructor(
        private auth: AuthService,
        private afs: AngularFirestore,
        private loadingCtrl: LoadingController,
        private toastr: ToastController,
        private router: Router
    ){}

    ngOnInit(){
        this.auth.user$.subscribe(user => {
            this.userId = user.userId;
            this.name = user.userName;
            this.email = user.userEmail;
            this.phone = user.userPhone;
        })
    }

    async updateProfile(){
        const loading = await this.loadingCtrl.create({
            message: 'Modificando...',
            spinner: 'crescent',
            showBackdrop: true
        });

        loading.present();

        this.afs.collection('user').doc(this.userId).set({
            'userName': this.name,
            'userEmail': this.email,
            'userPhone': this.phone,
            'editAt': Date.now()
        },{merge: true})
        .then(()=> {
            loading.dismiss();
            this.toast('Modificación exitosa', 'success');
            this.router.navigate(['/principal']);
        })
        .catch(error => {
            loading.dismiss();
            this.toast(error.message, 'danger');
        })
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