import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflocaliteComponent } from './reflocalite.component';

describe('ReflocaliteComponent', () => {
  let component: ReflocaliteComponent;
  let fixture: ComponentFixture<ReflocaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReflocaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
