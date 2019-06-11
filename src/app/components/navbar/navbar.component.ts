import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCareerComponent } from '../add-career/add-career.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AddInstructorComponent } from '../add-instructor/add-instructor.component';
import { Router } from '@angular/router';
import { AddStudyNetworkComponent } from '../add-study-network/add-study-network.component';
import { ListCoursesComponent } from '../list-courses/list-courses.component';
import { ListFamiliesComponent } from '../list-families/list-families.component';
import { ListStudyNetworksComponent } from '../list-study-networks/list-study-networks.component';
import { ListCarreersComponent } from '../list-carreers/list-carreers.component';
import { AssignStudentComponent } from '../assign-student/assign-student.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
  }

  AddCareer(){
    this.dialog.open(AddCareerComponent, {
      width: '450px',
      height: '450px'
    })
  }

  AddCourse(){
    this.dialog.open(AddCourseComponent, {
      width: '450px',
      height: '450px'
    })
  }

  AddInstructor(){
    this.dialog.open(AddInstructorComponent, {
      width: '480px',
      height: '480px'
    })
  }

  AddNetwork(){
    this.dialog.open(AddStudyNetworkComponent, {
      width: '480px',
      height: '480px'
    })
  }

  ListCourses(){
    this.dialog.open(ListCoursesComponent, {
      width: '500px',
      height: '500px'
    })
  }

  Families(){
    this.dialog.open(ListFamiliesComponent, {
      width: '500px',
      height: '500px'
    })
  }

  ListNetworks(){
    this.dialog.open(ListStudyNetworksComponent, {
      width: '500px',
      height: '500px'
    })
  }

  ListCarreers(){
    this.dialog.open(ListCarreersComponent, {
      width: '500px',
      height: '500px'
    })
  }

  AssignStudent(){
    this.dialog.open(AssignStudentComponent, {
      width: '500px',
      height: '500px'
    })
  }

}
