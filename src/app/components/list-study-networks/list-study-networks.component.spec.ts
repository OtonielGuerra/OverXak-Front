import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudyNetworksComponent } from './list-study-networks.component';

describe('ListStudyNetworksComponent', () => {
  let component: ListStudyNetworksComponent;
  let fixture: ComponentFixture<ListStudyNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudyNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudyNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
