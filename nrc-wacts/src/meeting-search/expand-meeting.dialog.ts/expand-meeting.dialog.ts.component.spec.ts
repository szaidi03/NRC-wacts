import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandMeetingDialogTsComponent } from './expand-meeting.dialog.ts.component';

describe('ExpandMeetingDialogTsComponent', () => {
  let component: ExpandMeetingDialogTsComponent;
  let fixture: ComponentFixture<ExpandMeetingDialogTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandMeetingDialogTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandMeetingDialogTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
