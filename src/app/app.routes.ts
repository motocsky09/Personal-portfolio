import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'Andrei Motoc · About',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Andrei Motoc · Projects',
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume.component').then((m) => m.ResumeComponent),
    title: 'Andrei Motoc · Resume',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Andrei Motoc · Contact',
  },
  { path: '**', redirectTo: '' },
];
