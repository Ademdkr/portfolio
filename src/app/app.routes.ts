import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Projects } from './pages/projects/projects';
import { IssueTracker } from './pages/projects/issue-tracker/issue-tracker';
import { BudgetTracker } from './pages/projects/budget-tracker/budget-tracker';
import { Skills } from './pages/skills/skills';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Landing },
  {
    path: 'projects',
    children: [
      { path: '', component: Projects },
      { path: 'issue-tracker', component: IssueTracker },
      { path: 'budget-tracker', component: BudgetTracker },
    ],
  },
  { path: 'skills', component: Skills },
  { path: 'ueber-mich', component: About },
  { path: 'kontakt', component: Contact },
  { path: '**', redirectTo: '' },
];
