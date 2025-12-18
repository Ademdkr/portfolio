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
    details: string;
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
        'Kollaboratives Tool zur Verwaltung und Nachverfolgung von Aufgaben, Bugs und Features mit Rollen-Management, Workflows und Echtzeitaktualisierungen.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT'],
      status: 'fertig',
      links: {
        demo: 'https://issue-tracker-demo.example.com',
        github: 'https://github.com/Ademdkr/issue-tracker',
        details: '/projects/issue-tracker',
      },
      featured: true,
    },
    {
      id: 'budget-tracker',
      name: 'Budget-Tracker',
      type: 'Full-Stack Web App',
      description:
        'Persönliches Finanzmanagement-Tool zur Verfolgung von Einnahmen, Ausgaben und Budgets mit visuellen Dashboards und Kategorisierung.',
      techStack: ['Angular', 'NestJS', 'MongoDB', 'Mongoose', 'Chart.js'],
      status: 'fertig',
      links: {
        demo: 'https://budget-tracker-demo.example.com',
        github: 'https://github.com/Ademdkr/budget-tracker',
        details: '/projects/budget-tracker',
      },
      featured: true,
    },
    {
      id: 'mini-shop',
      name: 'Mini-Shop',
      type: 'E-Commerce Platform',
      description:
        'Vollständige E-Commerce-Lösung mit Produktverwaltung, Warenkorb, Checkout und Zahlungsintegration.',
      techStack: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Redis'],
      status: 'in Arbeit',
      links: {
        details: '/projects/mini-shop',
      },
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
