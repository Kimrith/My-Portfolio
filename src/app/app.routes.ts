import { Routes } from '@angular/router';
import { About } from '../page/about/about';
import { Layout } from '../components/layout/layout';
import { Experince } from '../page/experince/experince';
import { Project } from '../page/project/project';
import { Contact } from '../page/contact/contact';
import { Home } from '../page/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
    path: '',
    component: Layout,
    children: [
        {
            path: 'home',
            component: Home
        },
        {
            path: 'about',
            component: About
        },
        {
            path: 'experience',
            component: Experince
        },
        {
            path: 'projects',
            component: Project
        },
        {
            path: 'contact',
            component: Contact
        }
    ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];