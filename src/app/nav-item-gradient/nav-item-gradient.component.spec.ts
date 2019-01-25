import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemGradientComponent } from './nav-item-gradient.component';

describe('NavItemGradientComponent', () => {
  let component: NavItemGradientComponent;
  let fixture: ComponentFixture<NavItemGradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemGradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
