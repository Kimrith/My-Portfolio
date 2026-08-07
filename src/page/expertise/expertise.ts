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
    { name: 'React JS', icon: 'devicon-react-original colored' },
    { name: 'Angular', icon: 'devicon-angular-plain colored' },
    { name: 'Tailwind CSS / Bootstrap', icon: 'devicon-tailwindcss-original colored' },
    { name: 'JavaScript / TypeScript', icon: 'devicon-typescript-plain colored' },
  ];

  backendSkills = [
    { name: 'ASP.NET Core (.NET)', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'Node.js/Express', icon: 'devicon-nodejs-plain colored' },
    { name: 'NestJS', icon: 'devicon-nestjs-original colored' },
  ];

  databases = [
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'SqlServer', icon: 'devicon-microsoftsqlserver-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Github', icon: 'devicon-github-original text-slate-800 dark:text-slate-200' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
  ];

  intergrates = [
    { name: 'KHQR Bakong Payments', icon: '💸' },
    { name: 'Google OAuth 2.0', icon: '🛡️' },
    { name: 'Telegram Bot API', icon: '🤖' },
    { name: 'Real-time WebSocket', icon: '⚡' },
  ];

  learningStack = [
    { name: 'Laravel', logo: 'devicon-laravel-plain colored' },
    { name: 'Python', logo: 'devicon-python-plain colored' },
    { name: 'Java Spring Boot', logo: 'devicon-spring-original colored' },
    { name: 'Flutter', logo: 'devicon-flutter-plain colored' },
  ];
}
