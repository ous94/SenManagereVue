import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheExperienceComponent } from './recherche-experience.component';

describe('RechercheExperienceComponent', () => {
  let component: RechercheExperienceComponent;
  let fixture: ComponentFixture<RechercheExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
