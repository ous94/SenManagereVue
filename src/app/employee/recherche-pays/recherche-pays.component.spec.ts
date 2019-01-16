import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePaysComponent } from './recherche-pays.component';

describe('RecherchePaysComponent', () => {
  let component: RecherchePaysComponent;
  let fixture: ComponentFixture<RecherchePaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
