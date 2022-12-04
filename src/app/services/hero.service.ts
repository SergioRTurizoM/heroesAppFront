import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroInterface } from '../interfaces/hero.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private url: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  getHeroesFromApi(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/characters/marvel`)
  }

}
