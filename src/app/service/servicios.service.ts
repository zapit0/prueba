import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService { 
  
  private Apikey : string = "https://jsonplaceholder.typicode.com/posts/"
    

  constructor( private http : HttpClient ) { }

  Obtenerdatos: any Apikey() {
    return this.http.get(this.Apikey)
  }

}
