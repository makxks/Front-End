import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemButtonComponent } from './nav-item-button.component';

describe('NavItemButtonComponent', () => {
  let component: NavItemButtonComponent;
  let fixture: ComponentFixture<NavItemButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
