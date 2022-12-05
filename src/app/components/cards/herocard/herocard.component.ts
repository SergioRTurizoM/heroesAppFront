import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCardComponent } from '../../dialog-card/dialog-card.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css'],
})
export class HerocardComponent implements OnInit {
  @Input() heroe!: any;

  public heroeCardData: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  enviarTarjeta(heroe: any) {
    let dataHero = {
      idApi: heroe.id,
      name: heroe.name,
      description: heroe.description,
      image: `${heroe.name}/portrait_xlarge.${heroe.thumbnail.extension}`,
    };
    console.log(heroe);
    console.log(dataHero);
    localStorage.setItem('Heroe', JSON.stringify(dataHero))
    Swal.fire('Hero added to collection')
  }

  openDialog(heroe:any){
    this.dialog.open(DialogCardComponent, {
      data: heroe
    })

    console.log(heroe);
  }
}
