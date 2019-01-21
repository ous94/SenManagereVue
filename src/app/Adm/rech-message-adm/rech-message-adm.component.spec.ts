import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechMessageAdmComponent } from './rech-message-adm.component';

describe('RechMessageAdmComponent', () => {
  let component: RechMessageAdmComponent;
  let fixture: ComponentFixture<RechMessageAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechMessageAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechMessageAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
