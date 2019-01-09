import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConnectComponent } from './client-connect.component';

describe('ClientConnectComponent', () => {
  let component: ClientConnectComponent;
  let fixture: ComponentFixture<ClientConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
