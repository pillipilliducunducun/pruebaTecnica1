import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  _url =  'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { 

    


    console.log('servicio persona')
  }
  getPersonas(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {headers:header})
  }
}
