import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    data: { name: 'Dashboard' },
  },
  {
    path: 'meeting-search',
    loadComponent: () =>
      import('../meeting-search/meeting-search.component').then(
        (m) => m.MeetingSearchComponent
      ),
    data: { name: 'Meeting Search' },
  },
  {
    path: 'meeting-search',
    loadComponent: () =>
      import('../meeting-search/meeting-search.component').then(
        (m) => m.MeetingSearchComponent
      ),
    data: { name: 'Meeting Search' },
  },
  {
    path: 'meeting-search/:id',
    loadComponent: () =>
      import('../meeting-search/meeting-search.component').then(
        (m) => m.MeetingSearchComponent
      ),
    data: { name: 'Meeting Search' },
  },
  {
    path: 'event-calendar',
    loadComponent: () =>
      import('../calendar-view/calendar-view.component').then(
        (m) => m.CalendarViewComponent
      ),
    data: { name: 'Event Calendar' },
  },
  {
    path: 'help-feedback',
    loadComponent: () =>
      import('../help-feedback/help-feedback.component').then(
        (m) => m.HelpFeedbackComponent
      ),
    data: { name: 'Help & Feedback' },
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('../reports/reports.component').then((m) => m.ReportsComponent),
    data: { name: 'Reports' },
  },
  {
    path: 'profile-management',
    loadComponent: () =>
      import('../administration/administration.component').then(
        (m) => m.AdministrationComponent
      ),
    data: { name: 'Profile Management', startingLink: 0 },
  },
  {
    path: 'roles-management',
    loadComponent: () =>
      import('../administration/administration.component').then(
        (m) => m.AdministrationComponent
      ),
    data: { name: 'Roles & Rights Management', startingLink: 1 },
  },
];
