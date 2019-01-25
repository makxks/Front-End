import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStripesComponent } from './loading-stripes.component';

describe('LoadingStripesComponent', () => {
  let component: LoadingStripesComponent;
  let fixture: ComponentFixture<LoadingStripesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingStripesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingStripesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
