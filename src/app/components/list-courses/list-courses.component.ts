import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses = [];
  displayedColumns: string[] = ['nombre', 'codigo', 'descripcion'];
  constructor(private rest: CoursesService) { 
    this.rest.getCourses().subscribe(res => {
      this.courses = res.todosLosCursos
    })
  }

  ngOnInit() {
  }

  

}
