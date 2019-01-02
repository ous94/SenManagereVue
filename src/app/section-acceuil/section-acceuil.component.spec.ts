import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAcceuilComponent } from './section-acceuil.component';

describe('SectionAcceuilComponent', () => {
  let component: SectionAcceuilComponent;
  let fixture: ComponentFixture<SectionAcceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAcceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
