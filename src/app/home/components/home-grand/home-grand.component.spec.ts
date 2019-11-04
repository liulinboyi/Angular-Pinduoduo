import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGrandComponent } from './home-grand.component';

describe('HomeGrandComponent', () => {
  let component: HomeGrandComponent;
  let fixture: ComponentFixture<HomeGrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
