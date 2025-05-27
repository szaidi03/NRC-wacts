import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
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
    'meetingType',
    'role',
    'sessionTime',
    'location',
  ];

  dataSource = new MatTableDataSource([
    {
      meetingTitle: 'Reactor Core Safety Review',
      meetingType: 'Subcommittee',
      role: 'Lead Member',
      sessionTime: '6/3/2025 8:30 AM',
      location: 'Virtual',
    },
    {
      meetingTitle: 'Spent Fuel Storage Update',
      meetingType: 'Committee',
      role: 'Attendee',
      sessionTime: '6/5/2025 9:00 AM',
      location: 'Room 203',
    },
  ]);

  ngAfterViewInit() {
    this.dataSource.paginator = this.upcomingMeetingsPaginator;
    this.recentFeedbackData.paginator = this.recentFeedbackPaginator;
  }
}
