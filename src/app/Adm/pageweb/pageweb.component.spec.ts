import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagewebComponent } from './pageweb.component';

describe('PagewebComponent', () => {
  let component: PagewebComponent;
  let fixture: ComponentFixture<PagewebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagewebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
