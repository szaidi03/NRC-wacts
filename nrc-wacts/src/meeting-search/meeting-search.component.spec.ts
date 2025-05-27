import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSearchComponent } from './meeting-search.component';

describe('MeetingSearchComponent', () => {
  let component: MeetingSearchComponent;
  let fixture: ComponentFixture<MeetingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
