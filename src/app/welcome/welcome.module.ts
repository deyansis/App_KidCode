import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome.page';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
