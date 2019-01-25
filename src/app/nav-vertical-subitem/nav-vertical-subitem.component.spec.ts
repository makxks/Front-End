import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerticalSubitemComponent } from './nav-vertical-subitem.component';

describe('NavVerticalSubitemComponent', () => {
  let component: NavVerticalSubitemComponent;
  let fixture: ComponentFixture<NavVerticalSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVerticalSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVerticalSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
