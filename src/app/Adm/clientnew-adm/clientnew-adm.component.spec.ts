import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientnewAdmComponent } from './clientnew-adm.component';

describe('ClientnewAdmComponent', () => {
  let component: ClientnewAdmComponent;
  let fixture: ComponentFixture<ClientnewAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientnewAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientnewAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
