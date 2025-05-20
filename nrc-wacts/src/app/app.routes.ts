import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../demo/demo.component').then(m => m.DemoComponent),
    data: { name: 'Dashboard' },
  },
  {
    path: 'meeting-search',
    loadComponent: () => import('../demo/demo.component').then(m => m.DemoComponent),
    data: { name: 'Meeting Search' },
  },
  {
    path: 'reports',
    loadComponent: () => import('../demo/demo.component').then(m => m.DemoComponent),
    data: { name: 'Reports' },
  },
  {
    path: 'documents',
    loadComponent: () => import('../demo/demo.component').then(m => m.DemoComponent),
    data: { name: 'Documents' },
  },
  {
    path: 'help-feedback',
    loadComponent: () => import('../demo/demo.component').then(m => m.DemoComponent),
    data: { name: 'Help & Feedback' },
  },
  {
    path: 'administration',
    loadComponent: () => import('../demo/demo.component').then(m => m.DemoComponent),
    data: { name: 'Administration' },
  },
];
