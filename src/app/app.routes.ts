import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
  { path: '', component: Landing },
  {
    path: 'projekte',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'issue-tracker',
        loadComponent: () =>
          import('./pages/projects/issue-tracker/issue-tracker').then((m) => m.IssueTracker),
      },
      {
        path: 'budget-tracker',
        loadComponent: () =>
          import('./pages/projects/budget-tracker/budget-tracker').then((m) => m.BudgetTracker),
      },
    ],
  },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills').then((m) => m.Skills) },
  { path: 'ueber-mich', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  {
    path: 'kontakt',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
