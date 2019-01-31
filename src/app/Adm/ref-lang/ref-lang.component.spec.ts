import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefLangComponent } from './ref-lang.component';

describe('RefLangComponent', () => {
  let component: RefLangComponent;
  let fixture: ComponentFixture<RefLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
