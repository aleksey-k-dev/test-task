import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsListItemComponent } from './calls-list-item.component';

describe('CallsListItemComponent', () => {
  let component: CallsListItemComponent;
  let fixture: ComponentFixture<CallsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
