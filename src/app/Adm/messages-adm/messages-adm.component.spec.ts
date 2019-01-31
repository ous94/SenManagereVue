import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesAdmComponent } from './messages-adm.component';

describe('MessagesAdmComponent', () => {
  let component: MessagesAdmComponent;
  let fixture: ComponentFixture<MessagesAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
