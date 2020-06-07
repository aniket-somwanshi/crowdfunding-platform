import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardsComponent } from './add-rewards.component';

describe('AddRewardsComponent', () => {
  let component: AddRewardsComponent;
  let fixture: ComponentFixture<AddRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
