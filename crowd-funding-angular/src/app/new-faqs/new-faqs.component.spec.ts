import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFAQsComponent } from './new-faqs.component';

describe('NewFAQsComponent', () => {
  let component: NewFAQsComponent;
  let fixture: ComponentFixture<NewFAQsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFAQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFAQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
