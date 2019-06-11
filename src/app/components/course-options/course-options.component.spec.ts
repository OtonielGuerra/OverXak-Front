import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOptionsComponent } from './course-options.component';

describe('CourseOptionsComponent', () => {
  let component: CourseOptionsComponent;
  let fixture: ComponentFixture<CourseOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
