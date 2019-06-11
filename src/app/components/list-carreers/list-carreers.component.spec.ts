import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarreersComponent } from './list-carreers.component';

describe('ListCarreersComponent', () => {
  let component: ListCarreersComponent;
  let fixture: ComponentFixture<ListCarreersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarreersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarreersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
