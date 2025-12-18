import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'projekte', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'ueber-mich', component: About },
  { path: 'kontakt', component: Contact },
  { path: '**', redirectTo: '' },
];
