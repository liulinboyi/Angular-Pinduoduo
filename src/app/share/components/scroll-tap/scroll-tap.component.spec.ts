import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTapComponent } from './scroll-tap.component';

describe('ScrollTapComponent', () => {
  let component: ScrollTapComponent;
  let fixture: ComponentFixture<ScrollTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
