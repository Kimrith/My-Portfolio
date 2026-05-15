import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './expertise.html',
})
export class Expertise {
  frontendSkills = [
    { name: 'React JS', level: 80 },
    { name: 'Angular', level: 90 },
    { name: 'Tailwind CSS / Bootstrap', level: 90 },
    { name: 'JavaScript / TypeScript', level: 80 },
  ];

  backendSkills = [
    { name: 'ASP.NET Core (.NET)', level: 50 },
    { name: 'Node.js/Express', level: 80 },
    { name: 'NestJS', level: 50 },
  ];

  databases = [
    { name: 'MySQL', level: 80 },
    { name: 'SqlServer', level: 50 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 50 },
    { name: 'Github', level: 80 },
    { name: 'Docker', level: 80 },
  ];

  intergrates = [
    { name: 'KHQR Bakong Payments', icon: '💸' },
    { name: 'Google OAuth 2.0', icon: '🛡️' },
    { name: 'Telegram Bot API', icon: '🤖' },
    { name: 'Real-time WebSocket', icon: '⚡' },
  ];

  learningStack = [
    { name: 'PHP & Laravel', logo: 'devicon-laravel-original colored' },
    { name: 'Python', logo: 'devicon-python-plain colored' },
    { name: 'Java Spring Boot', logo: 'devicon-spring-original colored' },
    { name: 'Flutter', logo: 'devicon-flutter-plain colored' },
    { name: 'ASP.NET Core', logo: 'devicon-dotnetcore-plain colored' },
    { name: 'PostgreSQL', logo: 'devicon-postgresql-plain colored' },
    { name: 'SqlServer', logo: 'devicon-microsoftsqlserver-plain colored' },
    { name: 'Nest', logo: 'devicon-nestjs-original colored' },
  ];
}
