import { Component, signal, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpandMeetingDialogTsComponent } from './expand-meeting.dialog.ts/expand-meeting.dialog.ts.component';

@Component({
  selector: 'app-meeting-search',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './meeting-search.component.html',
  styleUrl: './meeting-search.component.scss',
})
export class MeetingSearchComponent implements AfterViewInit {
  @ViewChild('upcomingMeetingsPaginator', { static: false })
  upcomingMeetingsPaginator!: MatPaginator;
  @ViewChild('recentFeedbackPaginator', { static: false })
  recentFeedbackPaginator!: MatPaginator;

  recentFeedbackColumns: string[] = ['type', 'date', 'summary'];

  recentFeedbackData = new MatTableDataSource([
    {
      type: 'Feature Request',
      date: '5/1/2025',
      summary: 'Add export to PDF for reports.',
    },
    {
      type: 'Bug Report',
      date: '5/7/2025',
      summary: 'Time zone shows incorrectly in meeting viewer.',
    },
  ]);

  displayedColumns: string[] = [
    'meetingTitle',
    'committee',
    // 'subcommittee',
    'cac',
    'meetingOnOrAfter',
    'members',
    'Actions'
  ];

  //signal array of random names for members
  members = signal(['Grace Davis', 'Frank Foster', 'John Doe', 'Jane Smith']);


  dataSource = new MatTableDataSource([
    {
      meetingTitle: 'Reactor Core Safety Review',
      committee: 'Committee A',
      subcommittee: 'Subcommittee X',
      cac: '1100000005',
      meetingOnOrAfter: '6/1/2025 - 3:00 PM',
      meetingOnOrBefore: '6/10/2025',
      members: ['Grace Davis', 'Frank Foster', 'John Doe', 'Jane Smith'],
    },
    {
      meetingTitle: 'Spent Fuel Storage Update',
      committee: 'Committee B',
      subcommittee: 'Subcommittee Y',
      cac: '1100000007',
      meetingOnOrAfter: '6/5/2025 - 2:00 PM',
      meetingOnOrBefore: '6/15/2025',
      members: ['John Doe', 'Jane Smith'],
    },
  ]);

  searchForm: FormGroup;

  committees = ['Committee A', 'Committee B', 'Committee C'];
  subcommittees = ['Subcommittee X', 'Subcommittee Y', 'Subcommittee Z'];
  cacs = ['CAC 1', 'CAC 2', 'CAC 3'];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.searchForm = this.fb.group({
      meetingTitle: [''],
      committee: [''],
      subcommittee: [''],
      cac: [''],
      meetingOnOrAfter: [''],
      meetingOnOrBefore: [''],
      members: [[]],
    });
  }

  resetForm() {
    this.searchForm.reset();
  }

  openDialog(rowData: any, mode: 'View' | 'Update'): void {
    this.dialog.open(ExpandMeetingDialogTsComponent, {
      minWidth: '60vw',
      data: {...rowData, mode: mode},
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.upcomingMeetingsPaginator;
    this.recentFeedbackData.paginator = this.recentFeedbackPaginator;
  }
}
