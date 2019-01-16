import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapePlusComponent } from './tape-plus.component';

describe('TapePlusComponent', () => {
  let component: TapePlusComponent;
  let fixture: ComponentFixture<TapePlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapePlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
