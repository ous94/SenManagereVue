import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDisponibleComponent } from './employe-disponible.component';

describe('EmployeDisponibleComponent', () => {
  let component: EmployeDisponibleComponent;
  let fixture: ComponentFixture<EmployeDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
