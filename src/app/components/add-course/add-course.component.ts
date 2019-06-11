import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course = new Course('', '', '');
  constructor(private rest: CourseService, private snack: MatSnackBar, 
    private dialogRef : MatDialogRef<HomeComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.rest.setCurso(this.course).subscribe(res => {
      console.log(res)
      if(res.cursoSave && res.cursoSave._id){
        this.snack.open('Curso guardado con exito', 'Cerrar', {
          duration: 2500
        })
        this.dialogRef.close();
      }else if(res.message){
        this.snack.open(res.message, 'Cerrar', {
          duration: 2500
        })
      }
    })
  }

}
