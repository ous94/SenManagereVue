import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEmplyesComponent } from './mes-emplyes.component';

describe('MesEmplyesComponent', () => {
  let component: MesEmplyesComponent;
  let fixture: ComponentFixture<MesEmplyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesEmplyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesEmplyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
