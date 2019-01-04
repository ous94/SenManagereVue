import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadClientComponent } from './head-client.component';

describe('HeadClientComponent', () => {
  let component: HeadClientComponent;
  let fixture: ComponentFixture<HeadClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
