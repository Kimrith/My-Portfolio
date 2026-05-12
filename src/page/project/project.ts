import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [NgFor],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  projects = [
    {
      title: 'Hotel Rental System',
      description:
        'A comprehensive system featuring role-based dashboards (Admin, Owner, Customer) and secure payment integrations.',
      image: 'assets/projects/hotel.jpg', // Replace with your project screenshot
      tech: ['Angular', 'NestJS', 'PostgreSQL', 'Tailwind'],
      link: '#',
      github: '#',
    },
    {
      title: 'POS & QR Order System',
      description:
        'Restaurant management system with KHQR integration for real-time mobile payments and QR-based ordering.',
      image: 'assets/projects/pos.jpg',
      tech: ['.NET Core', 'Angular', 'KHQR API'],
      link: '#',
      github: '#',
    },
    {
      title: 'Real-time Game Chat',
      description:
        'Multiplayer game platform featuring instant messaging and global chat rooms using WebSocket technology.',
      image: 'assets/projects/chat.jpg',
      tech: ['React JS', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
      github: '#',
    },
  ];
}
