import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes =[
  {
    path: '',
    children:[
      {path:'home', component: HomeComponent},
      {path:'usuarios', component: UsuariosComponent},      
      {path:'**', redirectTo:'home'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild (routes)
  ]
})
export class AplicacionRoutingModule { }
