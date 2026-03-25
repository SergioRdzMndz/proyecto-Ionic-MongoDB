import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Asegúrate que esté
import { IonicModule } from '@ionic/angular';
import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // <-- Esta línea es importante
    IonicModule,
    RegistroPageRoutingModule,
    RegistroPage
  ],
  
})
export class RegistroPageModule { }