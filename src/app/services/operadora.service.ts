import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperadoraService {

  constructor(private http: HttpClient) { }


  getOperadoraCodigo(id: number){
    let url = enviroment.PATH_WS+"/operador?id="+id;
    console.log(url);
    return this.http.get<any>(url);
  }

}
