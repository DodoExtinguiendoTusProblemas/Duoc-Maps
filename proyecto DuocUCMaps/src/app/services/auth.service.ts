import { Injectable } from '@angular/core';
import { IUser } from '../interfaz/IUser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<IUser>;
  user: IUser;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) { 
    this.user$ = this.afauth.authState.pipe(
      switchMap( user => {
        if(user){
          return this.afs.doc(`user/${user.uid}`).valueChanges();
        }else{
          return of(null)
        }
      })
    )
  }

  async singIn(email, password){
    const loading = await this.LoadingCtrl.create({
      message: 'Autenticando..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
      this.afauth.signInWithEmailAndPassword(email, password).then((data) =>{
        if(!data.user.emailVerified){
          loading.dismiss();
          this.toast('Por favor verifique su email', 'warning');
          this.afauth.signOut();
        }else{
          loading.dismiss();
          this.router.navigate(['/principal']);
        }
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    })
    .catch(error =>{
      loading.dismiss();
      this.toast(error.message, 'danger');
    });

  } // Fin del singIn

  async singOut(){
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afauth.signOut().then(() =>{
      loading.dismiss();
      this.router.navigate(['/']);
    })
  } // Fin del singOut

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
