import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AplicacionRoutingModule } from './aplicacion-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule
  ]
})
export class AplicacionModule { }
