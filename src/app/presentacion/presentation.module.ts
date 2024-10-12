import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PresentationPageRoutingModule } from './presentation-routing.module';
import { PresentationPage } from './presentation.page';

@NgModule({
  declarations: [PresentationPage], // Declarar la página
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationPageRoutingModule
  ],
})
export class PresentationPageModule {} // Nombre correcto del módulo
