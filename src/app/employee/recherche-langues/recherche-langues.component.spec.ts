import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheLanguesComponent } from './recherche-langues.component';

describe('RechercheLanguesComponent', () => {
  let component: RechercheLanguesComponent;
  let fixture: ComponentFixture<RechercheLanguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheLanguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheLanguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
