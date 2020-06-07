import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeComponent } from './pledge.component';

describe('PledgeComponent', () => {
  let component: PledgeComponent;
  let fixture: ComponentFixture<PledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
