import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-budget-tracker',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './budget-tracker.html',
  styleUrl: './budget-tracker.scss',
})
export class BudgetTracker {
  readonly project = {
    title: 'Budget-Tracker',
    shortDescription:
      'Persönliches Finanzmanagement-Tool zur Verfolgung von Einnahmen, Ausgaben und Budgets',
    techStack: [
      'Angular 21',
      'NestJS',
      'MongoDB',
      'Mongoose',
      'Chart.js',
      'RxJS',
      'Angular Material',
    ],
    links: {
      demo: 'https://budget-tracker-demo.example.com',
      frontendRepo: 'https://github.com/Ademdkr/budget-tracker-frontend',
      backendRepo: 'https://github.com/Ademdkr/budget-tracker-backend',
    },
  };

  readonly problemStatement = {
    why: 'Viele Menschen verlieren den Überblick über ihre Finanzen, was zu unvorhergesehenen Ausgaben und finanziellen Problemen führen kann.',
    problem:
      'Bestehende Apps sind oft zu komplex, kostenpflichtig oder datenschutzbedenklich (Cloud-basiert).',
    target: 'Privatpersonen, Familien und Freelancer, die ihre Finanzen selbst verwalten möchten.',
  };

  readonly features = [
    {
      icon: 'attach_money',
      text: 'Erfassung von Einnahmen und Ausgaben mit Datum, Betrag und Kategorie',
    },
    {
      icon: 'category',
      text: 'Kategorisierung (Miete, Lebensmittel, Transport, Entertainment, etc.)',
    },
    { icon: 'account_balance_wallet', text: 'Budget-Verwaltung mit Monats- und Jahresübersicht' },
    { icon: 'bar_chart', text: 'Visuelle Dashboards mit Diagrammen (Pie, Bar, Line Charts)' },
    { icon: 'filter_list', text: 'Filter- und Sortierfunktionen nach Datum, Kategorie, Betrag' },
    { icon: 'save', text: 'Sparziele mit Fortschrittsanzeige' },
    { icon: 'notifications_active', text: 'Warnungen bei Budgetüberschreitung' },
    { icon: 'file_download', text: 'Export als CSV oder PDF für Steuererklärung' },
    { icon: 'devices', text: 'Responsive Design für Desktop und Mobile' },
  ];

  readonly architecture = {
    frontend: {
      title: 'Frontend (Angular)',
      items: [
        'Standalone Components mit Signal-basiertem State',
        'Chart.js für interaktive Diagramme',
        'Reactive Forms für Transaktions-Eingabe',
        'Angular Material für UI-Komponenten',
        'LocalStorage für Offline-Support',
      ],
    },
    backend: {
      title: 'Backend (NestJS)',
      items: [
        'RESTful API mit CRUD-Operationen',
        'Aggregation-Pipelines für Statistiken',
        'JWT-Authentifizierung',
        'Scheduled Tasks für Budget-Checks',
        'PDF-Generierung für Reports',
      ],
    },
    database: {
      title: 'Datenbank (MongoDB)',
      items: [
        'Flexible Schema-Design (Users, Transactions, Budgets, Categories)',
        'Embedded Documents für Kategorien',
        'Indizes für Datum- und Kategorie-Queries',
        'Aggregation Framework für Summen und Gruppierungen',
      ],
    },
    communication: {
      title: 'Kommunikation',
      items: [
        'REST API mit JSON-Payloads',
        'HTTP Interceptors für Auth und Error Handling',
        'Optimistic Updates für bessere UX',
        'Caching-Strategien',
      ],
    },
  };

  readonly technicalDetails = [
    {
      title: 'Modulstruktur',
      description:
        'Feature-Module (Dashboard, Transactions, Budgets, Reports) mit Shared Module für wiederverwendbare Komponenten (Charts, Forms).',
    },
    {
      title: 'State-Handling',
      description:
        'Angular Signals für reaktive UI-Updates, Services für Daten-Verwaltung, BehaviorSubjects für Transaktions-Streams.',
    },
    {
      title: 'API-Design',
      description:
        'RESTful Endpoints (/transactions, /budgets, /categories, /reports), Query-Parameter für Filtering, Aggregation-Endpoints für Statistiken.',
    },
    {
      title: 'DB-Modell',
      description:
        'User (id, email) → Transaction (id, type, amount, category, date) → Budget (id, category, limit, period) → Category (id, name, icon, color).',
    },
  ];

  readonly challenges = [
    {
      title: 'Chart-Performance',
      problem: 'Langsames Rendering bei großen Datenmengen (tausende Transaktionen).',
      solution:
        'Aggregation auf Backend, Pagination, Lazy Loading von Diagrammen, Canvas-basiertes Rendering.',
    },
    {
      title: 'Datum-Handling',
      problem: 'Zeitzone-Probleme und Monatsübergänge bei Budget-Berechnungen.',
      solution:
        'UTC-Timestamps, date-fns Library für Datum-Operationen, Backend-seitige Aggregation.',
    },
    {
      title: 'Kategorien-Management',
      problem:
        'Flexible Kategorien vs. vordefinierte Kategorien - Balance zwischen Freiheit und Konsistenz.',
      solution: 'Hybrid-Ansatz: Standard-Kategorien mit Option für Custom-Kategorien.',
    },
  ];

  readonly learnings = [
    'Data Visualization: Chart.js bietet viel Flexibilität, aber Custom-Konfiguration ist zeitaufwendig.',
    'MongoDB Aggregation: Sehr mächtig für Statistiken, aber Lernkurve ist steil.',
    'UX-Design: Einfachheit ist entscheidend - zu viele Features verwirren Nutzer.',
  ];

  readonly improvements = [
    'Recurring Transactions (monatliche Miete, Gehälter) automatisch anlegen.',
    'Multi-Währung-Support für internationale Nutzer.',
    'Bank-Import via CSV oder API-Integration (z.B. Plaid).',
  ];
}
