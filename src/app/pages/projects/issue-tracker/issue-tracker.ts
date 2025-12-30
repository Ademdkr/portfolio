import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

interface TechnicalDetailItem {
  label: string;
  description: string;
  code?: string;
}

interface TechnicalDetail {
  title: string;
  description?: string;
  imagePath?: string;
  items?: TechnicalDetailItem[];
}

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
  selectedScreenshot: { label: string; image: string; description: string } | null = null;
  expandedSections: Set<string> = new Set(['Modulstruktur']); // First section expanded by default

  openScreenshot(screenshot: { label: string; image: string; description: string }) {
    this.selectedScreenshot = screenshot;
  }

  closeScreenshot() {
    this.selectedScreenshot = null;
  }

  toggleSection(title: string) {
    if (this.expandedSections.has(title)) {
      this.expandedSections.delete(title);
    } else {
      this.expandedSections.add(title);
    }
  }

  isSectionExpanded(title: string): boolean {
    return this.expandedSections.has(title);
  }

  readonly project = {
    title: 'Issue-Tracker',
    shortDescription:
      'Monorepo-basiertes Issue-Management-System mit JWT-Authentication, RBAC und Policy-basierter Authorization',
    techStack: [
      'Angular 20',
      'NestJS 11',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'Passport',
      'Nx Monorepo',
      'Angular Material',
    ],
    links: {
      demo: 'https://issue-tracker.ademdokur.dev',
      repository: 'https://github.com/Ademdkr/issue-tracker',
    },
  };

  readonly learningFocus = [
    {
      icon: 'account_tree',
      title: 'SPA-Architektur',
      description:
        'Angular Routing, Standalone Components, OnPush Change Detection, RxJS State Management',
    },
    {
      icon: 'security',
      title: 'Authentifizierung & JWT-Security',
      description:
        'Passport JWT Strategy, authGuard (CanActivateFn), HTTP-Interceptoren, 4 Rollen (Admin, Manager, Developer, User)',
    },
    {
      icon: 'api',
      title: 'RESTful API-Design mit Validation',
      description:
        'NestJS Controller mit verschachtelten Routen, class-validator DTOs, ValidationPipe, Global Exception Filter',
    },
    {
      icon: 'storage',
      title: 'Datenmodellierung (Relationen, ORM, SQL)',
      description:
        'Prisma ORM mit 8 Modellen, Composite Keys, 16 Indizes, Migrations, Relations (@relation), JSONB für Activity Logs',
    },
    {
      icon: 'filter_alt',
      title: 'Suche, Filter & Pagination',
      description:
        'Rollenbasierte Projekt-Filterung, Policy-basierte Zugriffssteuerung, Query Optimierung mit WHERE-Indizes',
    },
    {
      icon: 'architecture',
      title: 'Dokumentation & Team-Relevanz',
      description:
        'Nx Monorepo Architektur, Shared-Types Library, Architekturdiagramm, DB-Modell, saubere Code-Struktur für Teams',
    },
    {
      icon: 'palette',
      title: 'UI/UX & Design',
      description:
        'Angular Material Components, Reactive Forms, responsive Layouts, Dashboard mit Statistiken',
    },
  ];

  readonly features = [
    {
      icon: 'person',
      text: 'JWT Authentication mit 4 Rollen (Admin, Manager, Developer, Reporter)',
    },
    {
      icon: 'create',
      text: 'CRUD für Tickets, Projects, Comments mit Policy-basierter Authorization',
    },
    { icon: 'workspaces', text: 'Status-Workflows (Open → In Progress → Resolved → Closed)' },
    { icon: 'label', text: 'Project-spezifische Labels mit Farben für Kategorisierung' },
    { icon: 'search', text: 'Rollenbasierte Filterung und Suche mit Prisma Query Builder' },
    { icon: 'assignment', text: 'Project Members mit Add/Remove Funktionalität' },
    { icon: 'comment', text: 'Comments mit CRUD und Owner/Admin-basiertem Delete' },
    { icon: 'verified_user', text: 'class-validator DTOs in shared-types Library' },
    { icon: 'history', text: 'Ticket Activity Tracking (Status-, Assignee-, Label-Changes)' },
  ];

  readonly architecture = {
    frontend: {
      title: 'Frontend (Angular 20)',
      items: [
        'Standalone Components mit OnPush Change Detection',
        'Reactive Forms mit Custom Validators',
        'RxJS für async State (takeUntil Pattern)',
        'Angular Material 20 für UI-Komponenten',
        'authGuard (CanActivateFn) für Route Protection',
      ],
    },
    backend: {
      title: 'Backend (NestJS 11)',
      items: [
        'Global Guards: JwtAuthGuard, ThrottlerGuard',
        'Passport JWT Strategy mit @Public() Decorator',
        'Prisma ORM mit PostgreSQL',
        'Policy Handlers für granulare Authorization',
        'Health Check Endpoints für Monitoring',
      ],
    },
    database: {
      title: 'Datenbank (PostgreSQL)',
      items: [
        '8 Tabellen: User, Project, Ticket, Label, Comment, ProjectMember, TicketLabel, TicketActivity',
        'Foreign Keys mit Cascade Delete',
        '16 Indizes für Query-Optimierung',
        'JSONB für Activity Details',
      ],
    },
    communication: {
      title: 'Kommunikation',
      items: [
        'RESTful API mit nested Routes (z.B. /projects/:id/tickets)',
        'JWT Interceptor für Authorization Header',
        'Error Interceptor für zentrale Fehlerbehandlung',
        'CORS mit Environment-spezifischen Origins',
      ],
    },
  };

  readonly technicalDetails: TechnicalDetail[] = [
    {
      title: 'Modulstruktur',
      description:
        'Nx Monorepo mit apps/frontend, apps/backend und libs/shared-types. Feature-basierte Module mit Lazy Loading und strikter Separation of Concerns.',
      imagePath: 'assets/projects/issue-tracker/architechture-diagram.svg',
      items: [
        {
          label: 'Frontend-Struktur',
          description:
            'core/ (guards, interceptors, services, layout), features/ (auth, projects, tickets, dashboard, users)',
        },
        {
          label: 'Backend-Struktur',
          description:
            'NestJS Module: auth, projects, tickets, comments, users, dashboard, health - jeweils mit Controller, Service, DTOs',
        },
      ],
    },
    {
      title: 'Authorization Guards',
      description:
        'Multi-Layer Guard System: JwtAuthGuard (global) → RoleGuard (@Roles decorator) → ProjectAccessGuard (membership check) → PoliciesGuard (@CheckPolicies).',
      items: [
        {
          label: 'Policy Handlers',
          description:
            'UpdateTicketPolicy, DeleteTicketPolicy, ManageProjectMembersPolicy - injectable Klassen mit granularer Logik',
          code: `@CheckPolicies(UpdateTicketPolicyHandler)
async update(@CurrentUser() user: User) {
  // Policy prüft: Owner, Assignee, oder Manager/Admin
}`,
        },
        {
          label: 'JWT Strategy',
          description:
            'Passport JWT mit Secret aus .env, Token-Payload: { sub: userId, email, role }, Validierung via PrismaService',
        },
      ],
    },
    {
      title: 'API-Design & DTOs',
      description:
        'Shared-types Library mit class-validator DTOs für Type-Safety. Nested Routes für hierarchische Ressourcen.',
      items: [
        {
          label: 'REST Endpoints',
          description:
            '/api/projects, /api/projects/:id/tickets, /api/projects/:id/members, /api/projects/:projectId/tickets/:ticketId/comments',
          code: `// Nested Routes mit Guards
@Controller('projects/:projectId/tickets/:ticketId/comments')
@UseGuards(RoleGuard, ProjectAccessGuard)
export class CommentsController { }`,
        },
        {
          label: 'DTO Validation',
          description:
            'CreateTicketDto, UpdateTicketDto mit @IsString, @IsEnum, @MaxLength - Backend nutzt ValidationPipe',
        },
      ],
    },
    {
      title: 'DB-Modell & Migrations',
      description:
        'Prisma Schema mit 8 Modellen, gen_random_uuid() für UUIDs, @map() für snake_case Spalten, Enums mit @map() für lowercase DB-Werte.',
      imagePath: 'assets/projects/issue-tracker/db-modell.svg',
      items: [
        {
          label: 'Hauptmodelle',
          description:
            'User (@unique email, role enum), Project (slug @unique, status enum), Ticket (status, priority enums), Comment, Label',
        },
        {
          label: 'Relations & Performance',
          description:
            'ProjectMember (composite key [projectId, userId]), TicketLabel (many-to-many), TicketActivity (JSONB detail field), 16 Indizes',
          code: `// Prisma Schema
model Ticket {
  id          String   @id @default(dbgenerated("gen_random_uuid()"))
  status      TicketStatus @default(OPEN)
  ticketLabels TicketLabel[]

  @@index([projectId, status])
}`,
        },
      ],
    },
  ];

  readonly screenshots = [
    {
      label: 'Login & Authentifizierung',
      description: 'Login-Screen mit JWT-basierter Authentifizierung',
      image: 'login-route.png',
    },
    {
      label: 'Dashboard',
      description: 'Hauptübersicht mit Issue-Statistiken und schnellem Zugriff auf alle Bereiche',
      image: 'dashboard-route.png',
    },
    {
      label: 'Projects Overview',
      description: 'Übersicht aller Projekte mit Suchfunktion und Team-Zuordnung',
      image: 'projects-route.png',
    },
    {
      label: 'Ticket Management',
      description: 'Ticket-Übersicht mit erweiterten Filter- und Sortiermöglichkeiten',
      image: 'tickets-route.png',
    },
    {
      label: 'Ticket Details',
      description: 'Detailansicht mit Kommentaren, Activity-Log und Status-Verwaltung',
      image: 'ticket-overview-tab.png',
    },
    {
      label: 'Project Management',
      description: 'Projektverwaltung mit Team-Mitgliedern und Rollenzuordnung',
      image: 'project-management-tab.png',
    },
  ];

  readonly challenges = [
    {
      title: 'Policy-basierte Authorization',
      problem:
        'RoleGuard allein reichte nicht: Ticket-Update sollte nur für Owner, Assignee oder Manager/Admin erlaubt sein - nicht pauschal für alle Developers.',
      solution:
        'Implementierung von IPolicyHandler Interface mit konkreten Policy-Klassen (UpdateTicketPolicyHandler). PoliciesGuard nutzt ModuleRef für DI und führt handle(user, resource) aus. @CheckPolicies Decorator für deklarative Policy-Zuweisung.',
    },
    {
      title: 'Monorepo Shared Types',
      problem:
        'DTO-Duplikation zwischen Frontend und Backend führte zu Type-Mismatch und manueller Synchronisation.',
      solution:
        'Nx Library @issue-tracker/shared-types mit class-validator DTOs. Backend importiert DTOs direkt, Frontend nutzt Interfaces. Definite Assignment Assertions (email!) für TypeScript Strict Mode.',
    },
    {
      title: 'Nested Route Guards',
      problem:
        'Routes wie /projects/:projectId/tickets/:ticketId/comments benötigten Projekt-Zugriff, aber ProjectAccessGuard erwartete :id Parameter.',
      solution:
        'extractProjectId() Methode im Guard prüft beide Patterns (:id und :projectId). ProjectsService.hasProjectAccess() prüft Rolle (Admin/Manager immer erlaubt) oder ProjectMember-Tabelle.',
    },
    {
      title: 'Activity Tracking mit JSONB',
      problem:
        'Activity-Logs brauchten flexible Struktur: Status-Change hat oldValue/newValue, Label-Change hat labelName/color - starres Schema zu limitierend.',
      solution:
        'Prisma JSONB field "detail" mit Type Record<string, unknown>. Backend speichert { oldValue, newValue } oder { labelName, color }. GIN-Index auf detail für Query-Performance.',
    },
  ];

  readonly learnings = [
    'Policy Handler Pattern: Separation of Concerns - Authorization-Logik in testbaren Klassen statt in Guards. ModuleRef.get() ermöglicht DI-basierte Instantiierung.',
    'Prisma vs TypeORM: Prisma Schema ist deklarativer (Enums mit @map, Relations eindeutiger), aber Query Builder weniger flexibel für komplexe Joins.',
    'Guard Execution Order: JwtAuthGuard (global APP_GUARD) → RoleGuard (@UseGuards) → ProjectAccessGuard → PoliciesGuard - Reihenfolge ist kritisch!',
    'Nx Monorepo: shared-types Library vermeidet DTO-Duplikation, aber Circular Dependencies zwischen libs/shared-types und apps/backend erfordern sorgfältige Strukturierung.',
    'OnPush Change Detection: Reduziert Render-Zyklen massiv, aber erfordert immutable Updates (new Arrays statt push) und explizites ChangeDetectorRef.markForCheck().',
  ];

  readonly improvements = [
    'E2E Tests mit Cypress für kritische User Flows (Login, Create Ticket, Comment).',
    'Rate Limiting pro User (aktuell nur global via ThrottlerGuard) für feinere Kontrolle.',
    'Optimistic UI Updates mit Rollback bei Backend-Fehler (aktuell nur Loading-States).',
    'GraphQL Subscriptions für Real-time Activity Updates (Alternative zu Polling).',
  ];
}
