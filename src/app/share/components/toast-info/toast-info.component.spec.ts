import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastInfoComponent } from './toast-info.component';

describe('ToastInfoComponent', () => {
  let component: ToastInfoComponent;
  let fixture: ComponentFixture<ToastInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
