import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeDemandeComponent } from './tape-demande.component';

describe('TapeDemandeComponent', () => {
  let component: TapeDemandeComponent;
  let fixture: ComponentFixture<TapeDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
