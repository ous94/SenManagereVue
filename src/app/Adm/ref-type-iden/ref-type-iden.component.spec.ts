import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefTypeIdenComponent } from './ref-type-iden.component';

describe('RefTypeIdenComponent', () => {
  let component: RefTypeIdenComponent;
  let fixture: ComponentFixture<RefTypeIdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefTypeIdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefTypeIdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
