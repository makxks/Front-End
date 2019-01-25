import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSubitemComponent } from './nav-subitem.component';

describe('NavSubitemComponent', () => {
  let component: NavSubitemComponent;
  let fixture: ComponentFixture<NavSubitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSubitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSubitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
