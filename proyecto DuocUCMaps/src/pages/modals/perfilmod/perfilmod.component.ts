import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector: 'perfilmod',
    templateUrl: './perfilmod.component.html',
    styleUrls: ['./perfilmod.component.css']
})
export class PerfilmodComponent implements OnInit{

    user: any;

    constructor(
        private modalCtrl: ModalController,
        private auth: AuthService,
        private router: Router){}

    ngOnInit(){
        this.auth.user$.subscribe(user => {
            this.user = user;
        })
    }

    dismiss(){
        this.modalCtrl.dismiss();
    }

    gotoProfile(){
        this.router.navigate(['/profile/edit']);
    }
    
}