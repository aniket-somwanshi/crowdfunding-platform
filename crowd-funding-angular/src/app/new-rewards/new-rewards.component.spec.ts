import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRewardsComponent } from './new-rewards.component';

describe('NewRewardsComponent', () => {
  let component: NewRewardsComponent;
  let fixture: ComponentFixture<NewRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
