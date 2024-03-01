import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../core/models/appartement';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {

  constructor(private http: HttpClient) { }
  appartmentUrl="http://localhost:3000/appartement/"
  findAllAppartment(): Observable<Appartement[]>{
    return this.http.get<Appartement[]>(this.appartmentUrl)
  }
  addAppartment(appar:Appartement){
    return this.http.post(this.appartmentUrl,appar)
  }
  deleteAppartment(id:number){
    return this.http.delete(this.appartmentUrl+id)
  }
}
