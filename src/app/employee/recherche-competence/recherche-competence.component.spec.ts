import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCompetenceComponent } from './recherche-competence.component';

describe('RechercheCompetenceComponent', () => {
  let component: RechercheCompetenceComponent;
  let fixture: ComponentFixture<RechercheCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
