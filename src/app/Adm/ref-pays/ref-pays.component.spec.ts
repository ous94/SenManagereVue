import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefPaysComponent } from './ref-pays.component';

describe('RefPaysComponent', () => {
  let component: RefPaysComponent;
  let fixture: ComponentFixture<RefPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefPaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
