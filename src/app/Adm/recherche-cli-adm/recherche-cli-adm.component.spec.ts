import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCliAdmComponent } from './recherche-cli-adm.component';

describe('RechercheCliAdmComponent', () => {
  let component: RechercheCliAdmComponent;
  let fixture: ComponentFixture<RechercheCliAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheCliAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheCliAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
