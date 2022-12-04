import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herocard',
  templateUrl: './herocard.component.html',
  styleUrls: ['./herocard.component.css'],
})
export class HerocardComponent implements OnInit {
  @Input() heroe!: any;

  constructor() {}

  ngOnInit(): void {

    console.log(this.heroe)
  }
}
