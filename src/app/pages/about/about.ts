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
      year: '2022',
      title: 'Einstieg in die Web-Entwicklung',
      description:
        'Beginn der Auseinandersetzung mit den Grundlagen der Web-Entwicklung: HTML, CSS und JavaScript als Fundament für die weitere berufliche Entwicklung.',
      icon: 'lightbulb',
    },
    {
      year: '2023 - 07/2025',
      title: 'Ausbildung zum Fachinformatiker',
      description:
        'Umschulung zum Fachinformatiker für Anwendungsentwicklung beim Bildungsträger bfw. Verknüpfung von theoretischer Ausbildung mit praktischer Erfahrung durch sechsmonatige Praxisphase.',
      icon: 'school',
    },
    {
      year: 'Seit 10/2025',
      title: 'Praxisprojekte & Weiterentwicklung',
      description:
        'Eigenständige Entwicklung vollständiger Full-Stack-Anwendungen zur praktischen Umsetzung und Vertiefung der erworbenen Fachkenntnisse in modernen Web-Technologien.',
      icon: 'rocket_launch',
    },
  ];

  readonly workingPrinciples: WorkingPrinciple[] = [
    {
      icon: 'auto_awesome',
      title: 'Clean Code',
      description: 'Lesbarer und wartbarer Code mit klarer Struktur und umfassender Dokumentation',
    },
    {
      icon: 'layers',
      title: 'Best Practices',
      description:
        'Anwendung moderner Design Patterns, konsequente Typisierung und saubere Architektur',
    },
    {
      icon: 'psychology',
      title: 'Problemlösung',
      description:
        'Strukturierte Fehleranalyse, fundierte Recherche und kontinuierliche Weiterbildung',
    },
    {
      icon: 'groups',
      title: 'Zusammenarbeit',
      description:
        'Konstruktive Code-Reviews, aussagekräftige Dokumentation und präzise Kommunikation',
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
