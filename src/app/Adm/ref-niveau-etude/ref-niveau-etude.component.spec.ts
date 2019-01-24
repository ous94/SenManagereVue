import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefNiveauEtudeComponent } from './ref-niveau-etude.component';

describe('RefNiveauEtudeComponent', () => {
  let component: RefNiveauEtudeComponent;
  let fixture: ComponentFixture<RefNiveauEtudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefNiveauEtudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefNiveauEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
