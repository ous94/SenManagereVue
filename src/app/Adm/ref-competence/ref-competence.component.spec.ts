import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefCompetenceComponent } from './ref-competence.component';

describe('RefCompetenceComponent', () => {
  let component: RefCompetenceComponent;
  let fixture: ComponentFixture<RefCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
