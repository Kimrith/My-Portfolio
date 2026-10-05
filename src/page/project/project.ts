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
    {
      title: 'School Management System',
      description:
        'Hybrid web and desktop school platform featuring role-based access for admins, teachers, and students, handling admissions, attendance, fee tracking, and automated PDF report cards.',
      image: '/profile/sms.png',
      tech: ['Laravel', 'NativePHP', 'Electron', 'Tailwind CSS', 'PHPUnit'],
      link: '#',
      github: '#',
    },
    {
      title: 'Ecommerce System',
      description:
        'E-commerce platform enabling seamless buying and selling with secure payment gateway integration, real-time order tracking, and dedicated dashboards for customers, sellers, and admins.',
      image: '/profile/ecommerce.png',
      tech: ['ASP.NET Core', 'Angular', 'KHQR API', 'SQL Server', 'SPA Architecture'],
      link: '#',
      github: '#',
    },
  ];
}
