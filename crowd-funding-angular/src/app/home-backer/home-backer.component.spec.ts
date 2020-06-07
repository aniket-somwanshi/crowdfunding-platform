import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackerComponent } from './home-backer.component';

describe('HomeBackerComponent', () => {
  let component: HomeBackerComponent;
  let fixture: ComponentFixture<HomeBackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
