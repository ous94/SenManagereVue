import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheLocaliteComponent } from './recherche-localite.component';

describe('RechercheLocaliteComponent', () => {
  let component: RechercheLocaliteComponent;
  let fixture: ComponentFixture<RechercheLocaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheLocaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheLocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
