import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module'; // Importa el módulo de rutas
import { LoginPage } from './login.page'; // Importa el componente de la página de login

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule // Añade el módulo de rutas
  ],
  declarations: [LoginPage] // Declara el componente de la página de login
})
export class LoginPageModule {}
