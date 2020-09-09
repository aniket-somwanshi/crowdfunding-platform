import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesspageComponent } from './successpage.component';

describe('SuccesspageComponent', () => {
  let component: SuccesspageComponent;
  let fixture: ComponentFixture<SuccesspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
