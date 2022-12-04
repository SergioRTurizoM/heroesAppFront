import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-heroes-collection',
  templateUrl: './heroes-collection.component.html',
  styleUrls: ['./heroes-collection.component.css'],
})
export class HeroesCollectionComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'description', 'options'];
  dataSource: any[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
   this.getHeroesFromDB()
  }


  getHeroesFromDB(){
    this.heroService.getHeroesFromDB().subscribe((data) => {
      this.dataSource = data;
    });
  }


  delete(element:any){
    this.heroService.deleteHero(element._id).subscribe((data)=>{
      console.log("Heroe eliminado");

    })
    Swal.fire(
      'Deleted!',
      'Hero deleted from DataBase.',
      'success'
    )
    this.getHeroesFromDB()
  }
}
