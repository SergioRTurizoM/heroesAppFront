import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { HeroInterface } from '../../interfaces/hero.interface';
import { HerocardComponent } from '../cards/herocard/herocard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HeroesCollectionComponent } from '../heroes-collection/heroes-collection.component';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  heroesList: any[] = [];
  page: any
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroesFromApi().subscribe((heroes: any) => {
     this.heroesList = heroes.data
    });
  }
}
