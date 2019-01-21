import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEmpAdmComponent } from './recherche-emp-adm.component';

describe('RechercheEmpAdmComponent', () => {
  let component: RechercheEmpAdmComponent;
  let fixture: ComponentFixture<RechercheEmpAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEmpAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEmpAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
