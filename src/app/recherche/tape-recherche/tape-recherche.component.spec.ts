import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeRechercheComponent } from './tape-recherche.component';

describe('TapeRechercheComponent', () => {
  let component: TapeRechercheComponent;
  let fixture: ComponentFixture<TapeRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
