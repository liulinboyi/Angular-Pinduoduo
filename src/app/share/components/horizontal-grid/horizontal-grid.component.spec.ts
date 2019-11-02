import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalGridComponent } from './horizontal-grid.component';

describe('HorizontalGridComponent', () => {
  let component: HorizontalGridComponent;
  let fixture: ComponentFixture<HorizontalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
