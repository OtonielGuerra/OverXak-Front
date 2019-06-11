import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatListModule} from '@angular/material/list';
import { PersonaService } from './services/persona.service';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UpdatePersonComponent } from './components/update-person/update-person.component';
import {MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS, MatSnackBarModule, MatSortModule, MatCheckboxModule } from '@angular/material';
import {MAT_DATE_LOCALE} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { AssignRoleComponent } from './components/assign-role/assign-role.component';
import {MatRadioModule} from '@angular/material/radio';
import { AddFamilyComponent } from './components/add-family/add-family.component';
import { ListChildrensComponent } from './components/list-childrens/list-childrens.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatChipsModule, MatChip} from '@angular/material/chips';
import { AddCareerComponent } from './components/add-career/add-career.component';
import { ListCarreersComponent } from './components/list-carreers/list-carreers.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddInstructorComponent } from './components/add-instructor/add-instructor.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddStudyNetworkComponent } from './components/add-study-network/add-study-network.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ListFamiliesComponent } from './components/list-families/list-families.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { FamilyOptionsComponent } from './components/family-options/family-options.component';
import { CourseOptionsComponent } from './components/course-options/course-options.component';
import { ListStudyNetworksComponent } from './components/list-study-networks/list-study-networks.component';
import { AssignStudentComponent } from './components/assign-student/assign-student.component';

const MOMENT_FORMATS = {
  parse: {
      dateInput: 'LL',
  },
  display: {
      monthYearLabel: 'MMM YYYY',
      // See DateFormats for other required formats.
  },
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    UpdatePersonComponent,
    DeletePersonComponent,
    AddPersonComponent,
    AssignRoleComponent,
    AddFamilyComponent,
    ListChildrensComponent,
    AddCareerComponent,
    AddCourseComponent,
    AddInstructorComponent,
    AddStudyNetworkComponent,
    ListCoursesComponent,
    ListFamiliesComponent,
    FamilyOptionsComponent,
    CourseOptionsComponent,
    ListStudyNetworksComponent,
    ListCarreersComponent,
    AssignStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatChipsModule,
    MatTooltipModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    UpdatePersonComponent,
    DeletePersonComponent,
    AddPersonComponent,
    AssignRoleComponent,
    AddFamilyComponent,
    ListChildrensComponent,
    AddCareerComponent,
    AddCourseComponent,
    AddInstructorComponent,
    AddStudyNetworkComponent,
    ListCoursesComponent,
    ListFamiliesComponent,
    FamilyOptionsComponent,
    ListStudyNetworksComponent,
    ListCarreersComponent,
    AssignStudentComponent
  ],
  providers: [
    PersonaService,
    {provide: MAT_DATE_FORMATS, useValue: MOMENT_FORMATS},
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
