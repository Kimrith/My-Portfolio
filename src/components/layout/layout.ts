import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../../page/about/about';
import { Home } from '../../page/home/home';
import { Contact } from '../../page/contact/contact';
import { Project } from '../../page/project/project';
import { Expertise } from '../../page/expertise/expertise';

@Component({
  selector: 'app-layout',
  imports: [Header, About, Home, Expertise, Project, Contact],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
