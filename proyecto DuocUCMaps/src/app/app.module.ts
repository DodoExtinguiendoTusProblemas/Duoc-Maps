import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { RestoreComponent } from 'src/pages/restore/restore.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from 'src/pages/notice/notice.component';
import { PointComponent } from 'src/pages/point/point.component';
import { FoodPlaceComponent } from 'src/pages/food Place/foodPlace.component';
import { BibliotecaComponent } from 'src/pages/Biblioteca/Biblioteca.component';
import { EnfermeriaComponent } from 'src/pages/Enfermeria/Enfermeria.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { PerfilmodComponent } from 'src/pages/modals/perfilmod/perfilmod.component';
import { ProfileComponent } from 'src/pages/profile/profile.component';

import { PuntoEstudiantilComponent } from 'src/pages/PuntoEstudiantil/PuntoEstudiantil.component';
import { FinanzasComponent } from 'src/pages/Finanzas/Finanzas.component';
import { FormsModule } from '@angular/forms';


//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire//compat/storage';

//ENVIRONMENT
import { environment } from '../environments/environment.prod';

//AUTH SERVICE
import { AuthService } from './services/auth.service';

//AUTH GUARD
import { AuthGuard } from './guards/auth.guard';
import { Iframemenos1Component } from 'src/pages/iframe/iframemenos1/iframemenos1.component';

import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { CalendarComponent } from 'src/pages/calendar/calendar.component';
import { CalendarModule } from 'ion2-calendar';




@NgModule({
  declarations: [AppComponent,
     LoginComponent, 
     MainComponent, 
     RestoreComponent,
     NoticeComponent,
     PointComponent,
     FoodPlaceComponent,
     BibliotecaComponent,
     EnfermeriaComponent,
     FinanzasComponent,
     PuntoEstudiantilComponent,
     RegisterComponent,
     PerfilmodComponent,
     ProfileComponent,
     Iframemenos1Component,
     CalendarComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CalendarModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
