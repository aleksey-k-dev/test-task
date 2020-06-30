import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDetailsPageComponent } from './call-details-page.component';

describe('CallDetailsPageComponent', () => {
  let component: CallDetailsPageComponent;
  let fixture: ComponentFixture<CallDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
