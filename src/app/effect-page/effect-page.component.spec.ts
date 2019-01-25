import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectPageComponent } from './effect-page.component';

describe('EffectPageComponent', () => {
  let component: EffectPageComponent;
  let fixture: ComponentFixture<EffectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
