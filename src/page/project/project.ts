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
        'A robust hospitality platform featuring RBAC dashboards for Admins, Owners, and Customers. Integrated with Google OAuth 2.0 for seamless SSO and secure payment gateways for real-time bookings.',
      image: 'assets/projects/hotel.jpg',
      tech: ['Java Thymeleaf', 'PostgreSQL', 'Spring Security'],
      link: '#',
      github: '#',
    },
    {
      title: 'POS & QR Order System',
      description:
        'Cafe management system with KHQR integration for real-time mobile payments and QR-based ordering.',
      image: 'assets/projects/pos.jpg',
      tech: ['.NET Core', 'ReactJs', 'KHQR API', 'SQL Server'],
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
