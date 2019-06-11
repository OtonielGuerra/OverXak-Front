import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/Instructor';
import { PersonaService } from 'src/app/services/persona.service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { HomeComponent } from '../home/home.component';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {
  instructor: Instructor = new Instructor('', [], '');
  persons = []
  constructor(private personRest: PersonaService, private matDialogRef: MatDialogRef<HomeComponent>,
    private rest: InstructorService, private snack: MatSnackBar) {
    this.personRest.getPersonas().subscribe(res => {
      this.persons = res.todasLasPersonas
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.instructor)
    this.rest.setInstructor(this.instructor).subscribe(res => {
      console.log('Respuesta:' + JSON.stringify(res))
      if(res.instructorSave && res.instructorSave._id){
          this.snack.open('Instructor guardado con éxito', 'Cerrar', {
            duration: 2500
          })
          this.matDialogRef.close();
      }else if(res.message){
        this.snack.open(res.message, 'Cerrar', {
          duration: 2500
        })
      }
    })
  }

  Close(){
    this.matDialogRef.close();
  }

}
