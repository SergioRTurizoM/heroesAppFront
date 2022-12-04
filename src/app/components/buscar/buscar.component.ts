import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  wordSearch: string = '';
  heroes: any[] = [];
  heroSelected: any;

  constructor( private heroService: HeroService) { }

  ngOnInit(): void {
  }


  searching(){
    this.heroService.getByInitialName(this.wordSearch.trim())
    .subscribe(heroes => {this.heroes = heroes})

    console.log(this.heroes)
  }

  selected( event: MatAutocompleteSelectedEvent  ){
      if(!event.option.value){
        this.heroSelected = undefined;
        return
      }

      const heroe: any = event.option.value;
      this.wordSearch = heroe.name

      this.heroService.getByInitialName( heroe.name!)
      .subscribe(heroe => {this.heroSelected = heroe; console.log(heroe)})
  }
}
