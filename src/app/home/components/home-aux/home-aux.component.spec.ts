import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuxComponent } from './home-aux.component';

describe('HomeAuxComponent', () => {
  let component: HomeAuxComponent;
  let fixture: ComponentFixture<HomeAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
