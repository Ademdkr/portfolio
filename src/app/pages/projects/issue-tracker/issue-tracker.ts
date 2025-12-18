import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-issue-tracker',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './issue-tracker.html',
  styleUrl: './issue-tracker.scss',
})
export class IssueTracker {
  readonly project = {
    title: 'Issue-Tracker',
    shortDescription:
      'Kollaboratives Tool zur Verwaltung und Nachverfolgung von Aufgaben, Bugs und Features',
    techStack: ['Angular 21', 'NestJS', 'PostgreSQL', 'TypeORM', 'JWT', 'RxJS', 'Angular Material'],
    links: {
      demo: 'https://issue-tracker-demo.example.com',
      frontendRepo: 'https://github.com/Ademdkr/issue-tracker-frontend',
      backendRepo: 'https://github.com/Ademdkr/issue-tracker-backend',
    },
  };

  readonly problemStatement = {
    why: 'Teams benötigen ein zentrales System zur Verwaltung von Aufgaben, Bugs und Features, um den Überblick zu behalten und effizient zusammenzuarbeiten.',
    problem:
      'Klassische Tools sind oft zu komplex, langsam oder nicht auf die Bedürfnisse kleiner bis mittlerer Teams zugeschnitten.',
    target:
      'Entwicklungsteams, Projektmanager und Stakeholder, die eine einfache, schnelle und übersichtliche Lösung suchen.',
  };

  readonly features = [
    {
      icon: 'person',
      text: 'Authentifizierung & Rollen-Management (Admin, Manager, Developer, User)',
    },
    { icon: 'create', text: 'CRUD-Operationen für Issues, Projekte und Kommentare' },
    { icon: 'workspaces', text: 'Status-Workflows (Open → In Progress → Review → Closed)' },
    { icon: 'label', text: 'Kategorisierung (Bug, Feature, Task) und Prioritäten' },
    { icon: 'search', text: 'Filter- und Suchfunktionen mit Query-Builder' },
    { icon: 'assignment', text: 'Zuweisung von Issues an Team-Mitglieder' },
    { icon: 'comment', text: 'Kommentare und Activity-Logs für Nachverfolgbarkeit' },
    { icon: 'verified_user', text: 'Input-Validierung (Frontend & Backend) und Fehlerhandling' },
    { icon: 'notifications', text: 'E-Mail-Benachrichtigungen bei Status-Änderungen' },
  ];

  readonly architecture = {
    frontend: {
      title: 'Frontend (Angular)',
      items: [
        'Standalone Components mit Signals API',
        'Reactive Forms mit Custom Validators',
        'RxJS für asynchrone State-Verwaltung',
        'Angular Material für UI-Komponenten',
        'Route Guards für Authentifizierung',
      ],
    },
    backend: {
      title: 'Backend (NestJS)',
      items: [
        'RESTful API mit modularer Architektur',
        'JWT-basierte Authentifizierung',
        'TypeORM für Datenbank-Zugriff',
        'Role-Based Access Control (RBAC)',
        'Global Exception Filter für Fehlerhandling',
      ],
    },
    database: {
      title: 'Datenbank (PostgreSQL)',
      items: [
        'Normalisierte Tabellen (Users, Projects, Issues, Comments)',
        'Foreign Keys für Datenintegrität',
        'Indizes für Performance-Optimierung',
        'Soft Deletes für Audit-Trail',
      ],
    },
    communication: {
      title: 'Kommunikation',
      items: [
        'REST API mit JSON-Payloads',
        'HTTP Interceptors für Auth-Token',
        'Error Handling mit Custom Errors',
        'CORS-Konfiguration',
      ],
    },
  };

  readonly technicalDetails = [
    {
      title: 'Modulstruktur',
      description:
        'Feature-Module (Auth, Issues, Projects, Users) mit Lazy Loading und klarer Trennung von Presentation und Business Logic.',
    },
    {
      title: 'State-Handling',
      description:
        'Angular Signals für reaktive UI-Updates, Services als Single Source of Truth, RxJS Observables für asynchrone Operationen.',
    },
    {
      title: 'API-Design',
      description:
        'RESTful Endpoints mit klarer Ressourcen-Struktur, DTOs für Validation, Swagger-Dokumentation.',
    },
    {
      title: 'DB-Modell',
      description:
        'User (id, email, role) → Project (id, name, description) → Issue (id, title, status, priority, assignee) → Comment (id, text, author).',
    },
  ];

  readonly challenges = [
    {
      title: 'Role-Based Access Control',
      problem: 'Komplexe Berechtigungslogik: Wer darf was sehen/ändern?',
      solution: 'Custom Guards und Decorators in NestJS, Role-Checks auf Route- und Method-Level.',
    },
    {
      title: 'Performance bei vielen Issues',
      problem: 'Lange Ladezeiten bei großen Projekten mit hunderten Issues.',
      solution: 'Pagination, Lazy Loading, DB-Indizes und Query-Optimierung.',
    },
    {
      title: 'Formular-Validierung',
      problem: 'Konsistente Validierung zwischen Frontend und Backend.',
      solution: 'Shared DTOs (class-validator), Frontend verwendet Backend-Fehlermeldungen.',
    },
  ];

  readonly learnings = [
    'Architektur-Patterns: Saubere Trennung von Concerns erleichtert Wartung und Testing erheblich.',
    'API-Design: Frühe Swagger-Dokumentation spart Zeit und reduziert Missverständnisse.',
    'Testing: Unit- und E2E-Tests von Anfang an einplanen, nicht nachträglich.',
  ];

  readonly improvements = [
    'WebSocket-Integration für Echtzeit-Updates ohne Polling.',
    'Drag & Drop für Status-Änderungen (Kanban-Board).',
    'Erweiterte Reporting-Funktionen mit Diagrammen.',
  ];
}
