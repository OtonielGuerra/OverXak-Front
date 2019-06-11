import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudyNetworkComponent } from './add-study-network.component';

describe('AddStudyNetworkComponent', () => {
  let component: AddStudyNetworkComponent;
  let fixture: ComponentFixture<AddStudyNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudyNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudyNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
