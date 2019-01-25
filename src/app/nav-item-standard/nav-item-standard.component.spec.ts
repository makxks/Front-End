import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemStandardComponent } from './nav-item-standard.component';

describe('NavItemStandardComponent', () => {
  let component: NavItemStandardComponent;
  let fixture: ComponentFixture<NavItemStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
