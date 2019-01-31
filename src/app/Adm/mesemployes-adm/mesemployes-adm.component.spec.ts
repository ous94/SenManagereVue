import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesemployesAdmComponent } from './mesemployes-adm.component';

describe('MesemployesAdmComponent', () => {
  let component: MesemployesAdmComponent;
  let fixture: ComponentFixture<MesemployesAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesemployesAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesemployesAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
