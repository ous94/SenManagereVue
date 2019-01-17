import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEthniesComponent } from './recherche-ethnies.component';

describe('RechercheEthniesComponent', () => {
  let component: RechercheEthniesComponent;
  let fixture: ComponentFixture<RechercheEthniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEthniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEthniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
