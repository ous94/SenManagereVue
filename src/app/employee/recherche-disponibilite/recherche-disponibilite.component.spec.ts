import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheDisponibiliteComponent } from './recherche-disponibilite.component';

describe('RechercheDisponibiliteComponent', () => {
  let component: RechercheDisponibiliteComponent;
  let fixture: ComponentFixture<RechercheDisponibiliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheDisponibiliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
