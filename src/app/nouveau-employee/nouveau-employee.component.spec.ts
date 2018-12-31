import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEmployeeComponent } from './nouveau-employee.component';

describe('NouveauEmployeeComponent', () => {
  let component: NouveauEmployeeComponent;
  let fixture: ComponentFixture<NouveauEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
