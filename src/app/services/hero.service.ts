import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroInterface } from '../interfaces/hero.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  listatotalheroes: any = [];

  private url: string = environment.baseUrl

  constructor(private http: HttpClient) {}


  getHeroesFromApi(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/characters/marvel`)
  }

  getByInitialName( termino: string ): Observable<any[]> {
    return this.http.get<any[]>(`${ this.url }/characters/database/${termino}`);
  }

  getHeroesFromDB(): Observable<any[]>{
    return this.http.get<any[]>(`${ this.url }/characters/`);
  }

  deleteHero(id:any): Observable<any>{
    return this.http.delete<any[]>(`${this.url}/characters/database/${id}`)
  }

}
