import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesContratsComponent } from './mes-contrats.component';

describe('MesContratsComponent', () => {
  let component: MesContratsComponent;
  let fixture: ComponentFixture<MesContratsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesContratsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
