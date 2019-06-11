import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'app-list-carreers',
  templateUrl: './list-carreers.component.html',
  styleUrls: ['./list-carreers.component.css']
})
export class ListCarreersComponent implements OnInit {
  carreras = [];
  constructor(private rest: CarreraService) {
    this.rest.getCarreras().subscribe(res => {
      this.carreras = res.todasLasCarreras
    })
   }

  ngOnInit() {
  }

}
