import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupShortListComponent } from './group-short-list.component';

describe('GroupShortListComponent', () => {
  let component: GroupShortListComponent;
  let fixture: ComponentFixture<GroupShortListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupShortListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupShortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
