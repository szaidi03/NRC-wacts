import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';

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
    MatTabsModule,
    RouterLink
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
    {
      type: 'General Feedback',
      date: '5/15/2025',
      summary: 'Improve navigation in the dashboard.',
    },
    {
      type: 'Feature Request',
      date: '5/20/2025',
      summary: 'Add dark mode support.',
    },
    {
      type: 'Bug Report',
      date: '5/25/2025',
      summary: 'Search function returns no results for valid queries.',
    },
    {
      type: 'General Feedback',
      date: '5/30/2025',
      summary: 'Consider adding a help section for new users.',
    },
  ]);

  displayedColumns: string[] = [
    'meetingTitle',
    'meetingType',
    'role',
    'sessionTime',
    'location',
    'Actions'
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
    {
      meetingTitle: 'Emergency Preparedness Drill',
      meetingType: 'Subcommittee',
      role: 'Lead Member',
      sessionTime: '6/10/2025 10:00 AM',
      location: 'Virtual',
    },
    {
      meetingTitle: 'Regulatory Compliance Review',
      meetingType: 'Committee',
      role: 'Attendee',
      sessionTime: '6/15/2025 11:00 AM',
      location: 'Room 101',
    },
    {
      meetingTitle: 'Nuclear Safety Standards Discussion',
      meetingType: 'Subcommittee',
      role: 'Lead Member',
      sessionTime: '6/20/2025 1:00 PM',
      location: 'Virtual',
    },
    {
      meetingTitle: 'Annual Safety Report Review',
      meetingType: 'Committee',
      role: 'Attendee',
      sessionTime: '6/25/2025 2:00 PM',
      location: 'Room 305',
    },
  ]);

  ngAfterViewInit() {
    this.dataSource.paginator = this.upcomingMeetingsPaginator;
    this.recentFeedbackData.paginator = this.recentFeedbackPaginator;
  }
}
