import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface TimelineStep {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface WorkingPrinciple {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly journey: TimelineStep[] = [
    {
      year: '2023',
      title: 'Umschulung zum Fachinformatiker',
      description:
        'Start der Umschulung mit Fokus auf Anwendungsentwicklung. Grundlagen in Java, Datenbanken und Softwareentwicklung.',
      icon: 'school',
    },
    {
      year: '2024',
      title: 'Vertiefung Full-Stack Entwicklung',
      description:
        'Intensive Beschäftigung mit modernen Web-Technologien: Angular, NestJS, TypeScript, PostgreSQL und MongoDB.',
      icon: 'code',
    },
    {
      year: '2024-2025',
      title: 'Praxisprojekte & Portfolio',
      description:
        'Entwicklung eigener Full-Stack Projekte (Issue-Tracker, Budget-Tracker) zur Anwendung und Vertiefung der erlernten Skills.',
      icon: 'rocket_launch',
    },
  ];

  readonly workingPrinciples: WorkingPrinciple[] = [
    {
      icon: 'auto_awesome',
      title: 'Clean Code',
      description: 'Lesbarer, wartbarer Code mit klarer Struktur und Dokumentation',
    },
    {
      icon: 'layers',
      title: 'Best Practices',
      description: 'Moderne Patterns, TypeScript, Type Safety und saubere Architektur',
    },
    {
      icon: 'psychology',
      title: 'Problemlösung',
      description: 'Systematisches Debugging, Recherche und kontinuierliches Lernen',
    },
    {
      icon: 'groups',
      title: 'Teamwork',
      description: 'Code Reviews, Dokumentation und klare Kommunikation',
    },
  ];

  readonly technicalInterests: string[] = [
    'Full-Stack Entwicklung',
    'REST API Design',
    'TypeScript & Type Safety',
    'Angular & RxJS',
    'NestJS & Node.js',
    'Datenbank-Design',
    'Clean Architecture',
    'DevOps & Docker',
  ];
}
