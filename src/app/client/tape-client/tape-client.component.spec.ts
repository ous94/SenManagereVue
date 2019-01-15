import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapeClientComponent } from './tape-client.component';

describe('TapeClientComponent', () => {
  let component: TapeClientComponent;
  let fixture: ComponentFixture<TapeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
