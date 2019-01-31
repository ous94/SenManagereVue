import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefEthnieComponent } from './ref-ethnie.component';

describe('RefEthnieComponent', () => {
  let component: RefEthnieComponent;
  let fixture: ComponentFixture<RefEthnieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefEthnieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefEthnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
