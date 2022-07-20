import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public personas : Array<any> = [];


  constructor( private personaService: PersonaService) {
    this.personaService.getPersonas().subscribe((resp: any)=>{
      console.log(resp)

      this.personas = resp
    })
  }

  
  
    
  

  ngOnInit(): void {
  }

}
