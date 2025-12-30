import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  techStack: string[];
  status: 'fertig' | 'in Arbeit';
  links: {
    demo?: string;
    github?: string;
    details?: string;
  };
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      id: 'issue-tracker',
      name: 'Issue-Tracker',
      type: 'Full-Stack Web App',
      description:
        'Monorepo-basiertes Issue-Management-System mit JWT-Authentication, RBAC und Policy-basierter Authorization. Nx Monorepo mit shared-types Library für Type-Safety zwischen Frontend und Backend.',
      techStack: ['Angular 20', 'NestJS 11', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Nx Monorepo'],
      status: 'fertig',
      links: {
        demo: 'https://issue-tracker.ademdokur.dev',
        github: 'https://github.com/Ademdkr/issue-tracker',
        details: '/projekte/issue-tracker',
      },
      featured: true,
    },
    {
      id: 'budget-tracker',
      name: 'Budget-Tracker',
      type: 'Full-Stack Web App',
      description:
        'Moderne Full-Stack-Webanwendung zur Verwaltung persönlicher Finanzen, Budgets und Transaktionen. Mit Chart.js Visualisierungen, PWA-Support, Session-basierter Authentifizierung und optimistischem UI.',
      techStack: [
        'Angular 18',
        'NestJS 10',
        'PostgreSQL 16',
        'Prisma ORM',
        'Chart.js',
        'RxJS',
        'Angular Material',
      ],
      status: 'fertig',
      links: {
        demo: 'https://budget-tracker.ademdokur.dev',
        github: 'https://github.com/Ademdkr/budget-tracker',
        details: '/projekte/budget-tracker',
      },
      featured: true,
    },
    {
      id: 'mini-shop',
      name: 'Mini-Shop',
      type: 'E-Commerce Platform',
      description:
        'Vollständige E-Commerce-Lösung mit Produktverwaltung, Warenkorb, Checkout und Zahlungsintegration.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL'],
      status: 'in Arbeit',
      links: {},
    },
    /*     {
      id: 'wiki',
      name: 'Wiki',
      type: 'Knowledge Management',
      description:
        'Internes Wiki-System für Dokumentation, Wissensdatenbank und kollaboratives Schreiben mit Markdown-Unterstützung.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'Markdown', 'WebSocket'],
      status: 'in Arbeit',
      links: {
        details: '/projects/wiki',
      },
    }, */
  ];
}
