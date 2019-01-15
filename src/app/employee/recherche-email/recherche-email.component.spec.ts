import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEmailComponent } from './recherche-email.component';

describe('RechercheEmailComponent', () => {
  let component: RechercheEmailComponent;
  let fixture: ComponentFixture<RechercheEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
