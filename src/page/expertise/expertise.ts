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
    { name: 'React JS', level: 85 },
    { name: 'Tailwind CSS / Bootstrap', level: 95 },
    { name: 'JavaScript / TypeScript', level: 88 },
  ];

  backendSkills = [
    { name: 'ASP.NET Core (.NET)', level: 50 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'NestJS', level: 80 },
  ];

  databases = [
    { name: 'MySQL', level: 80 },
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
  ];
}
