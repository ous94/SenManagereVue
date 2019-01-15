import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheReligionComponent } from './recherche-religion.component';

describe('RechercheReligionComponent', () => {
  let component: RechercheReligionComponent;
  let fixture: ComponentFixture<RechercheReligionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheReligionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
