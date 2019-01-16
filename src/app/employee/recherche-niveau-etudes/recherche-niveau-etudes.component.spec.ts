import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheNiveauEtudesComponent } from './recherche-niveau-etudes.component';

describe('RechercheNiveauEtudesComponent', () => {
  let component: RechercheNiveauEtudesComponent;
  let fixture: ComponentFixture<RechercheNiveauEtudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheNiveauEtudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheNiveauEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
