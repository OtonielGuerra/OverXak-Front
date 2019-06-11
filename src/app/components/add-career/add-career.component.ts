import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/models/Career';
import { CarreraService } from 'src/app/services/carrera.service';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { ListCarreersComponent } from '../list-carreers/list-carreers.component'
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add-career',
  templateUrl: './add-career.component.html',
  styleUrls: ['./add-career.component.css']
})
export class AddCareerComponent implements OnInit {
  career: Career = new Career('', '', '');

  constructor(  public rest: CarreraService,
                private snack: MatSnackBar,
                private dialogRef: MatDialogRef<HomeComponent>) {  }

  ngOnInit() {
  }

  onSubmit(){
    this.rest.setCarrera(this.career).subscribe(res => {
      if(res.carreraSave && res.carreraSave._id){
        this.snack.open('Carrera guardada con exito', 'Cerrar', {
          duration: 2500
        })
        this.dialogRef.close()
      }else if(res.message){
        this.snack.open(res.message, 'Cerrar', {
          duration: 2500
        })
      }
    })
  }

  Close(){
    this.dialogRef.close()
  }

}
