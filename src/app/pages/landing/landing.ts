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
        'Kollaboratives Tool zur Verwaltung und Nachverfolgung von Aufgaben, Bugs und Features.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'JWT'],
      liveUrl: 'https://issue-tracker-demo.example.com',
      detailsUrl: '/projects/issue-tracker',
    },
    {
      title: 'Budget-Tracker',
      description:
        'Persönliches Finanzmanagement-Tool mit visuellen Dashboards und Kategorisierung.',
      techStack: ['Angular', 'NestJS', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://budget-tracker-demo.example.com',
      detailsUrl: '/projects/budget-tracker',
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    },
    {
      title: 'Backend',
      skills: ['NestJS', 'Node.js', 'REST API', 'GraphQL'],
    },
    {
      title: 'Datenbanken',
      skills: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'VS Code', 'Postman'],
    },
  ];
}
