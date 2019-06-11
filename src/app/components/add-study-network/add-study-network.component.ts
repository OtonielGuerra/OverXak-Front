import { Component, OnInit } from '@angular/core';
import { StudyNetwork } from 'src/app/models/StudyNetwork';
import { FormControl } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { NetworkService } from 'src/app/services/network.service';
import { CourseService } from 'src/app/services/course.service';
import { CoursesService } from 'src/app/services/courses.service';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-study-network',
  templateUrl: './add-study-network.component.html',
  styleUrls: ['./add-study-network.component.css']
})
export class AddStudyNetworkComponent implements OnInit {
  studyNetwork: StudyNetwork = new StudyNetwork('', null, null, [], []);
  courses = [];
  constructor(private rest: NetworkService, private courseRest: CoursesService,
    private snack: MatSnackBar, 
    private matDialogRef : MatDialogRef<HomeComponent>) {
      this.courseRest.getCourses().subscribe(res => {
        this.courses = res.todosLosCursos
      })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.studyNetwork);
    this.rest.setNetwork(this.studyNetwork).subscribe(res => {
      console.log('Respuesta:' + JSON.stringify(res))
      if(res.netSave && res.netSave._id){
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
