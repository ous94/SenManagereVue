import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleDemandeComponent } from './nouvelle-demande.component';

describe('NouvelleDemandeComponent', () => {
  let component: NouvelleDemandeComponent;
  let fixture: ComponentFixture<NouvelleDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
