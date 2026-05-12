import { Routes } from '@angular/router';
import { About } from '../page/about/about';
import { Layout } from '../components/layout/layout';
import { Expertise } from '../page/expertise/expertise';
import { Project } from '../page/project/project';
import { Contact } from '../page/contact/contact';
import { Home } from '../page/home/home';

export const routes: Routes = [
  //   {
  //     path: '',
  //     redirectTo: 'home',
  //     pathMatch: 'full',
  //   },
  //   {
  //     path: '',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'home',
  //         component: Home,
  //       },
  //       {
  //         path: 'about',
  //         component: About,
  //       },
  //       {
  //         path: 'expertise',
  //         component: Expertise,
  //       },
  //       {
  //         path: 'projects',
  //         component: Project,
  //       },
  //       {
  //         path: 'contact',
  //         component: Contact,
  //       },
  //     ],
  //   },
  //   {
  //     path: '**',
  //     redirectTo: 'home',
  //   },

  {
    path: '',
    component: Layout, // This is your single entry point
  },
  {
    path: '**',
    redirectTo: '',
  },
];
