import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreatorsCampaignsComponent } from './show-creators-campaigns.component';

describe('ShowCreatorsCampaignsComponent', () => {
  let component: ShowCreatorsCampaignsComponent;
  let fixture: ComponentFixture<ShowCreatorsCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCreatorsCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCreatorsCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
