import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefautComponent } from './page-defaut.component';

describe('PageDefautComponent', () => {
  let component: PageDefautComponent;
  let fixture: ComponentFixture<PageDefautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDefautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDefautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
