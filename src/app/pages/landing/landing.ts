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
      title: 'E-Commerce Platform',
      description: 'Vollständige E-Commerce-Lösung mit Produktverwaltung, Warenkorb und Checkout.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe'],
      liveUrl: 'https://demo.example.com',
      detailsUrl: '/projekte',
    },
    {
      title: 'Task Management System',
      description: 'Kollaboratives Projektmanagement-Tool mit Echtzeit-Updates und Team-Features.',
      techStack: ['Angular', 'NestJS', 'MongoDB', 'WebSocket'],
      detailsUrl: '/projekte',
    },
    {
      title: 'Portfolio Website',
      description: 'Moderne Portfolio-Website mit responsivem Design und Angular Material.',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Material'],
      liveUrl: 'https://portfolio.example.com',
      detailsUrl: '/projekte',
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
