import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/services/carrera.service';
import { JornadaService } from 'src/app/services/jornada.service';
import { Jornada } from 'src/app/models/Jornada';
import { FormControl } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-assign-student',
  templateUrl: './assign-student.component.html',
  styleUrls: ['./assign-student.component.css']
})
export class AssignStudentComponent implements OnInit {
  jornada: Jornada = new Jornada('', '', '', '');
  carreers = [];
  grados = [
    '1ro',
    '2do',
    '3ro',
    '4to',
    '5to',
    '6to'
  ];
  secciones = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H'
  ];
  jornadas = [
    'Matutina', 'Vespertina'
  ];
  constructor(private rest: JornadaService, private careerRest: CarreraService,
    private snack: MatSnackBar, private matDialogRef : MatDialogRef<HomeComponent>) { 
    this.careerRest.getCarreras().subscribe(res=> {
      this.carreers = res.todasLasCarreras;
    })
  }

  ngOnInit(){
  } 
  
  onSubmit(){
    console.log(this.jornada);
    this.rest.setJornada(this.jornada).subscribe(res => {
      console.log('Respuesta:' + JSON.stringify(res))
      if(res.jornadaSave && res.jornadaSave._id){
        this.snack.open('Red Guardada con exito','Cerrar', {
          duration: 2500
        })
        this.matDialogRef.close();
      }else if(res.message){
        this.snack.open(res.message, 'Cerrar', {
          duration: 2500
        })
      }
    });
  }

}
