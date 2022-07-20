import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ 
  path: 'aplicacion',
  loadChildren:()=> import('./aplicacion/aplicacion.module').then(m => m.AplicacionModule)
},
{
  path:'**',
  redirectTo: 'aplicacion'
}
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
