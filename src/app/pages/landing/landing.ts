import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  detailsUrl: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-landing',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, MatChipsModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  readonly profile = {
    name: 'Adem Dokur',
    role: 'Full-Stack Developer (Angular · NestJS)',
    description:
      'Entwicklung moderner Webanwendungen mit Fokus auf saubere Architektur und Praxisnähe.',
    githubUrl: 'https://github.com/Ademdkr',
  };

  readonly highlightProjects: Project[] = [
    {
      title: 'Issue-Tracker',
      description:
        'Monorepo-basiertes Issue-Management-System mit JWT-Authentication, RBAC und Policy-basierter Authorization.',
      techStack: ['Angular 20', 'NestJS 11', 'PostgreSQL', 'Prisma ORM', 'Nx Monorepo'],
      liveUrl: 'https://issue-tracker.ademdokur.dev',
      detailsUrl: '/projects/issue-tracker',
    },
    {
      title: 'Budget-Tracker',
      description:
        'Full-Stack-Webanwendung zur Verwaltung persönlicher Finanzen mit Chart.js Visualisierungen.',
      techStack: ['Angular 18', 'NestJS 10', 'PostgreSQL', 'Prisma ORM', 'Chart.js'],
      liveUrl: 'https://budget-tracker.ademdokur.dev',
      detailsUrl: '/projects/budget-tracker',
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'HTML5 & CSS3', 'SCSS'],
    },
    {
      title: 'Backend',
      skills: ['NestJS', 'Node.js', 'REST API', 'JWT Authentication'],
    },
    {
      title: 'Datenbanken',
      skills: ['PostgreSQL', 'Prisma', 'SQL'],
    },
    {
      title: 'DevOps',
      skills: ['Git & GitHub', 'Docker', 'Nx Monorepo', 'Nginx'],
    },
  ];
}
