import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroments';
import { Recarga } from '../domain/Recarga';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  constructor(private http: HttpClient) {

  }

  getRecargas(){
    let url = enviroment.PATH_WS+"/recargas/list";
    return this.http.get<any>(url);
  }

  saveRecarga(recarga: Recarga){
    let url = enviroment.PATH_WS+'/recargas'
    return this.http.post<any>(url,recarga);
  }
}
