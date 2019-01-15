import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEmployeeComponent } from './recherche-employee.component';

describe('RechercheEmployeeComponent', () => {
  let component: RechercheEmployeeComponent;
  let fixture: ComponentFixture<RechercheEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
