import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare var Swal: any;

@Component({
  selector: 'app-project',
  imports: [NgFor, TranslateModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  showLocalAlert(projectTitle: string) {
    Swal.fire({
      title: 'Project is Local',
      text: `The ${projectTitle} is currently running in a local environment and is not hosted publicly yet.`,
      icon: 'info',
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#2563eb',
    });
  }
  projects = [
    // {
    //   title: 'Hotel Rental System',
    //   description:
    //     'A robust hospitality platform featuring RBAC dashboards for Admins, Owners, and Customers. Integrated with Google OAuth 2.0 for seamless SSO and secure payment gateways for real-time bookings.',
    //   image: '/profile/hotelrental.png',
    //   tech: ['Java Thymeleaf', 'PostgreSQL'],
    //   link: '#',
    //   github: '#',
    // },
    {
      title: 'POS & QR Order System',
      description:
        'Cafe management system with KHQR integration for real-time mobile payments and QR-based ordering.',
      image: '/profile/ordersystem.png',
      tech: ['.NET Core', 'ReactJs', 'KHQR API', 'SQL Server'],
      link: '#',
      github: '#',
    },
    {
      title: 'Ecommerce System',
      description: 'E-commerce platform enabling seamless buying and selling with secure payment gateway integration, real-time order tracking, and dedicated dashboards for customers, sellers, and admins.',
      image: '/profile/ecommerce.png',
      tech: ['ASP.NET Core', 'Angular', 'KHQR API', 'SQL Server'],
      link: '#',
      github: '#',
    },
  ];
}
