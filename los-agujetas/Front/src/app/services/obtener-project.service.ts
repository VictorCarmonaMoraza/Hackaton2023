import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProjectService {

  public apiUrl:string='http://127.0.0.1:8000/api/proyectos/';



  constructor(private http:HttpClient) { }

  getProject(){
    return this.http.get(this.apiUrl);
}

}
