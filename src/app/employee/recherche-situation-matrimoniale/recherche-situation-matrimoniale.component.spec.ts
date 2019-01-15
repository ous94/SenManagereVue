import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSituationMatrimonialeComponent } from './recherche-situation-matrimoniale.component';

describe('RechercheSituationMatrimonialeComponent', () => {
  let component: RechercheSituationMatrimonialeComponent;
  let fixture: ComponentFixture<RechercheSituationMatrimonialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheSituationMatrimonialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSituationMatrimonialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
