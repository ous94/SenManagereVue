import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeEmployerComponent } from './tape-employer.component';

describe('TapeEmployerComponent', () => {
  let component: TapeEmployerComponent;
  let fixture: ComponentFixture<TapeEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
