import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStripesSmoothComponent } from './loading-stripes-smooth.component';

describe('LoadingStripesSmoothComponent', () => {
  let component: LoadingStripesSmoothComponent;
  let fixture: ComponentFixture<LoadingStripesSmoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingStripesSmoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingStripesSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
