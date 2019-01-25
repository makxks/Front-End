import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSquaresComponent } from './loading-squares.component';

describe('LoadingSquaresComponent', () => {
  let component: LoadingSquaresComponent;
  let fixture: ComponentFixture<LoadingSquaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSquaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
