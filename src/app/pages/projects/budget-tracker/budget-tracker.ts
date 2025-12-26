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
    title: 'Budget-Tracker',
    shortDescription:
      'Moderne Full-Stack-Webanwendung zur Verwaltung persönlicher Finanzen, Budgets und Transaktionen',
    techStack: [
      'Angular 18',
      'NestJS 10',
      'PostgreSQL 16',
      'Prisma ORM',
      'Chart.js',
      'RxJS',
      'Angular Material',
      'TypeScript',
      'Docker',
    ],
    links: {
      demo: 'https://budget-tracker-frontend.pages.dev',
      repository: 'https://github.com/Ademdkr/budget-tracker',
    },
  };

  readonly learningFocus = [
    {
      icon: 'api',
      title: 'RESTful API-Design',
      description:
        'NestJS Controller → Service → Repository Pattern mit DTO-Validation und Swagger-Dokumentation',
    },
    {
      icon: 'device_hub',
      title: 'State-Management',
      description: 'Reaktive Zustandsverwaltung mit RxJS BehaviorSubjects und Observable-Patterns',
    },
    {
      icon: 'fact_check',
      title: 'Formulare & Validierung',
      description: 'Angular Reactive Forms mit custom Validators und Type-Safety',
    },
    {
      icon: 'bar_chart',
      title: 'Datenvisualisierung',
      description: 'Interaktive Charts mit Chart.js für Budgets, Transaktionen und Trends',
    },
    {
      icon: 'filter_alt',
      title: 'Datenfilterung & CRUD',
      description:
        'Komplexe Query-Parameter, Sortierung, Pagination und vollständige CRUD-Operationen',
    },
  ];

  readonly features = [
    {
      icon: 'dashboard',
      text: 'Dashboard mit übersichtlicher Darstellung aller Finanzdaten und KPIs',
    },
    {
      icon: 'account_balance_wallet',
      text: 'Verwaltung mehrerer Konten (Giro, Sparkonto, Kreditkarte, etc.)',
    },
    {
      icon: 'receipt_long',
      text: 'Erfassung und Kategorisierung von Einnahmen und Ausgaben',
    },
    {
      icon: 'payments',
      text: 'Monatliche Budgets für verschiedene Kategorien mit Fortschritts-Tracking',
    },
    {
      icon: 'category',
      text: 'Flexible Kategorisierung mit Emojis und Farben',
    },
    {
      icon: 'bar_chart',
      text: 'Interaktive Diagramme und Datenvisualisierung mit Chart.js',
    },
    {
      icon: 'lock',
      text: 'Sicheres JWT-basiertes Authentifizierungs-System',
    },
    {
      icon: 'devices',
      text: 'Responsive Design optimiert für Desktop und Mobile',
    },
    {
      icon: 'cloud',
      text: 'Cloud-Ready mit Unterstützung für Neon Database (Serverless PostgreSQL)',
    },
  ];

  readonly architecture = {
    frontend: {
      title: 'Frontend (Angular 18)',
      items: [
        'Standalone Components mit modernem Angular',
        'Lazy Loading für optimale Performance',
        'OnPush Change Detection für effizientes Rendering',
        'Reactive Forms für typsichere Formulare',
        'Angular Material für konsistente UI',
        'Chart.js Integration für Datenvisualisierung',
      ],
    },
    backend: {
      title: 'Backend (NestJS 10)',
      items: [
        'RESTful API mit 3-Schicht-Architektur (Controller → Service → Repository)',
        'Feature-basierte Module (Auth, Accounts, Transactions, Categories, Budgets)',
        'JWT-Authentifizierung mit bcrypt Password Hashing',
        'Input Validation mit class-validator DTOs',
        'Swagger/OpenAPI Dokumentation',
        'Health Check Endpoints für Monitoring',
      ],
    },
    database: {
      title: 'Datenbank (PostgreSQL 16 + Prisma)',
      items: [
        'Prisma ORM für typsichere Datenbank-Queries',
        'Relationales Schema mit Foreign Keys',
        'Migrations für Version Control',
        'Connection Pooling für Performance',
        'Unterstützung für lokale DB (Docker) und Neon Cloud',
      ],
    },
    communication: {
      title: 'Kommunikation & Deployment',
      items: [
        'REST API mit JSON-Payloads',
        'CORS-Konfiguration für Frontend-Zugriff',
        'HTTP Interceptors für Auth und Loading States',
        'Docker Compose für lokale Entwicklung',
        'Cloudflare Pages für Frontend Hosting',
      ],
    },
  };

  readonly technicalDetails: TechnicalDetail[] = [
    {
      title: 'Modulstruktur',
      description:
        'Die Architektur des Budget Tracker ist als klar modularer Full-Stack-Stack aufgebaut. Das frontendseitige Angular-Projekt ist in Feature-basierte Module gegliedert (z. B. Auth, Accounts, Transactions, Categories, Budgets), unterstützt durch gemeinsame Core- und Shared-Module. Das NestJS-Backend bildet die gleiche fachliche Strukturierung ab, nutzt Prisma zur Datenbankanbindung und stellt REST-APIs für alle Frontend-Operationen bereit. Daten werden in einer PostgreSQL-Datenbank persistent gespeichert.',
      imagePath: 'assets/projects/budget-tracker/architecture-diagram.svg',
    },
    {
      title: 'State-Handling',
      items: [
        {
          label: 'AuthService',
          description:
            'BehaviorSubjects (currentUser$, isAuthenticated$) mit LocalStorage-Persistierung',
          code: `private currentUserSubject = new BehaviorSubject<User | null>(
  this.getUserFromStorage()
);
public currentUser$ = this.currentUserSubject.asObservable();

// Update bei Login
this.currentUserSubject.next(response.user);`,
        },
        {
          label: 'AccountSelectionService',
          description:
            'Globale Konto-Auswahl (selectedAccount$) mit DB-Sync und User-Wechsel-Migration',
          code: `private selectedAccountSubject = new BehaviorSubject<SelectedAccount | null>(null);
public selectedAccount$ = this.selectedAccountSubject.asObservable();

// Komponente subscribt
this.accountSelection.selectedAccount$.subscribe(account => {
  if (account) this.loadTransactions(account.id);
});`,
        },
        {
          label: 'LoadingService',
          description: 'Globaler HTTP-Request-Counter für zentrale Loading-Spinner',
          code: `private loadingSubject = new BehaviorSubject<boolean>(false);
public loading$ = this.loadingSubject.asObservable();

// Im HTTP Interceptor
this.loadingService.setLoading(true);
return next(req).pipe(
  finalize(() => this.loadingService.setLoading(false))
);`,
        },
        {
          label: 'LoadingStateService',
          description:
            'Map-basierte State-Registry für komponentenspezifische States (isLoading, hasError, isEmpty)',
          code: `// Service Definition
private states = new Map<string, BehaviorSubject<LoadingState>>();

// Komponente nutzt
this.loadingStateService.setLoading('transactions');
this.loadingStateService.setSuccess('transactions');`,
        },
        {
          label: 'Performance',
          description: 'OnPush Change Detection + manuelle ChangeDetectorRef.detectChanges()',
          code: `@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsComponent {
  private cdr = inject(ChangeDetectorRef);

  createAccount(data: Account) {
    this.accounts.push(data);
    this.cdr.detectChanges(); // Manueller Trigger
  }
}`,
        },
        {
          label: 'Backend',
          description: 'Stateless Architecture mit NestJS Dependency Injection',
        },
      ],
    },
    {
      title: 'API-Design',
      description:
        'Die NestJS Backend-API folgt RESTful-Prinzipien und nutzt eine klare 3-Schichten-Architektur. Alle Endpunkte sind vollständig mit Swagger/OpenAPI dokumentiert und bieten Type-Safety durch TypeScript DTOs.',
      items: [
        {
          label: '3-Schichten-Architektur',
          description:
            'Controller → Service → Repository Pattern mit Dependency Injection für klare Trennung von HTTP-Logic, Business-Logic und Datenzugriff.',
          code: `// Controller: HTTP-Schicht
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  create(@Body() createDto: CreateTransactionDto, @Headers() headers: any) {
    const userId = this.getUserIdFromHeaders(headers);
    return this.transactionsService.create(createDto, userId);
  }
}

// Service: Business-Logic
@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateTransactionDto, userId: string) {
    // Validierung: Kategorie gehört zum User
    const category = await this.prisma.category.findFirst({
      where: { id: BigInt(createDto.categoryId), account: { userId: BigInt(userId) } }
    });
    if (!category) throw new Error('Category not found');

    // Repository: Datenzugriff
    return this.prisma.transaction.create({
      data: { ...createDto, categoryId: BigInt(createDto.categoryId) },
      include: { category: true, account: true }
    });
  }
}`,
        },
        {
          label: 'DTO Validation mit class-validator',
          description:
            'Automatische Request-Validierung durch TypeScript DTOs mit Decorators für Type-Safety und aussagekräftige Fehlermeldungen.',
          code: `export class CreateTransactionDto {
  @ApiProperty({ description: 'Titel der Transaktion', example: 'Supermarkt Einkauf' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ description: 'Betrag der Transaktion', example: 45.99 })
  @IsNumber()
  amount!: number;

  @ApiProperty({ description: 'Art der Transaktion', enum: TransactionType })
  @IsEnum(TransactionType)
  type!: TransactionType;

  @ApiPropertyOptional({ description: 'Datum (ISO 8601)', example: '2025-11-05' })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiProperty({ description: 'ID der zugehörigen Kategorie', example: '1' })
  @IsString()
  @IsNotEmpty()
  categoryId!: string;
}`,
        },
        {
          label: 'Swagger/OpenAPI Dokumentation',
          description:
            'Vollständige API-Dokumentation mit @ApiTags, @ApiOperation, @ApiResponse für automatische Swagger-UI und Type-sichere Client-Generierung.',
          code: `@ApiTags('Transactions')
@ApiBearerAuth()
@ApiHeader({ name: 'x-user-id', description: 'Benutzer-ID', required: true })
@Controller('transactions')
export class TransactionsController {
  @Post()
  @ApiOperation({
    summary: 'Neue Transaktion erstellen',
    description: 'Erstellt eine neue Einnahme oder Ausgabe'
  })
  @ApiResponse({ status: 201, description: 'Transaktion erfolgreich erstellt' })
  @ApiResponse({ status: 400, description: 'Ungültige Eingabedaten' })
  create(@Body() dto: CreateTransactionDto, @Headers() headers: any) {
    return this.transactionsService.create(dto, headers['x-user-id']);
  }

  @Get()
  @ApiOperation({ summary: 'Transaktionen abrufen' })
  @ApiQuery({ name: 'accountId', required: false, description: 'Filter nach Konto' })
  findAll(@Query('accountId') accountId?: string, @Headers() headers?: any) {
    return this.transactionsService.findAll(headers['x-user-id'], accountId);
  }
}`,
        },
        {
          label: 'Query-Parameter Filtering',
          description:
            'Flexible Datenabfragen durch @Query() Decorators mit optionalen Filtern für accountId, categoryId und Datumsbereich.',
          code: `// Controller: Query-Parameter definieren
@Get()
@ApiQuery({ name: 'accountId', required: false })
@ApiQuery({ name: 'categoryId', required: false })
findAll(
  @Query('accountId') accountId?: string,
  @Query('categoryId') categoryId?: string,
  @Headers() headers?: any
) {
  const userId = headers['x-user-id'];
  return this.transactionsService.findAll(userId, { accountId, categoryId });
}

// Service: Dynamische Prisma-Queries
async findAll(userId: string, filters: { accountId?: string, categoryId?: string }) {
  return this.prisma.transaction.findMany({
    where: {
      account: { userId: BigInt(userId) },
      ...(filters.accountId && { accountId: BigInt(filters.accountId) }),
      ...(filters.categoryId && { categoryId: BigInt(filters.categoryId) })
    },
    include: { category: true, account: true },
    orderBy: { date: 'desc' }
  });
}`,
        },
      ],
    },
    {
      title: 'DB-Modell',
      description:
        'Relationales Datenbankmodell mit PostgreSQL und Prisma ORM. Das Schema nutzt strikte referenzielle Integrität durch Foreign Keys mit Cascade Delete, optimierte Indizes für Performance-kritische Queries und Unique Constraints zur Vermeidung von Duplikaten.',
      imagePath: 'assets/projects/budget-tracker/db-modell.svg',
      items: [
        {
          label: 'Primary Keys',
          description: 'Alle Tabellen nutzen auto-increment BigInt IDs für optimale Performance',
        },
        {
          label: 'Foreign Keys',
          description: 'Cascade Delete für automatische referenzielle Integrität',
        },
        {
          label: 'Unique Constraints',
          description:
            'User.email (einmalig pro System) • Category(account_id, name) - Verhindert Duplikate pro Account • Budget(category_id, year, month) - Ein Budget pro Kategorie/Monat',
        },
        {
          label: 'Indizes',
          description:
            'Optimiert für: user_id, account_id, category_id, date, amount, type, is_active',
        },
        {
          label: 'Enums',
          description:
            'AccountType: CHECKING | SAVINGS | CREDIT_CARD | INVESTMENT | CASH | OTHER • TransactionType: INCOME | EXPENSE',
        },
      ],
    },
  ];

  readonly screenshots = [
    {
      label: 'Dashboard',
      description:
        'Übersicht mit Kontostand-Karten, Budgets-Fortschritt und monatlichen Transaktionstrends in interaktiven Charts.',
      image: 'dashboard-route.png',
    },
    {
      label: 'Transaktionen',
      description:
        'Liste aller Transaktionen mit Filter-Optionen, Suchfunktion und Sortierung nach Datum, Betrag oder Kategorie.',
      image: 'transactions-route.png',
    },
    {
      label: 'Transaktion erstellen',
      description:
        'Modal-Dialog mit Formular-Validierung für Betrag, Kategorie, Datum und optionaler Notiz.',
      image: 'transactions-form.png',
    },
    {
      label: 'Konten',
      description:
        'Verwaltung mehrerer Konten (Girokonto, Sparkonto, Kreditkarte) mit aktuellen Salden und Transaktionsanzahl.',
      image: 'accounts-route.png',
    },
    {
      label: 'Konto erstellen',
      description:
        'Formular für Kontoanlage mit Kontotyp-Auswahl, Initialsaldo und optionaler Farbe/Icon-Konfiguration.',
      image: 'accounts-form.png',
    },
    {
      label: 'Kategorien',
      description:
        'Übersicht aller Einnahme- und Ausgabe-Kategorien mit Farbcodierung und Emoji-Icons für visuelle Unterscheidung.',
      image: 'categories-route.png',
    },
    {
      label: 'Kategorie erstellen',
      description:
        'Dialog zur Erstellung neuer Kategorien mit Name, Transaktionstyp, Farbe und Emoji-Auswahl.',
      image: 'categories-form.png',
    },
    {
      label: 'Budgets',
      description:
        'Monatliche Budgets mit Fortschrittsbalken, Ausgaben-Tracking und Warnung bei Budgetüberschreitung.',
      image: 'budgets-route.png',
    },
    {
      label: 'CSV-Import',
      description:
        'Massenimport von Transaktionen aus CSV-Dateien mit automatischer Kategorisierung und Validierung.',
      image: 'import-route.png',
    },
  ];

  readonly challenges = [
    {
      title: 'State-Management mit RxJS',
      problem:
        'Komplexe Zustandsverwaltung zwischen mehreren Komponenten (Auth, Account Selection, Loading States) ohne zentrale State Library.',
      solution:
        'Implementierung eigener Service-Pattern mit BehaviorSubjects für reaktive Datensynchronisation. AuthService für User-State mit LocalStorage-Persistierung, AccountSelectionService mit DB-Sync für Konto-Wechsel.',
    },
    {
      title: 'Type-Safety über Stack-Grenzen',
      problem:
        'Inkonsistente Datentypen zwischen Frontend (Angular) und Backend (NestJS) führten zu Runtime-Fehlern.',
      solution:
        'Strikte TypeScript-Konfiguration auf beiden Seiten, shared DTOs als Single Source of Truth, Prisma-generierte Types für garantierte DB-Konsistenz. OnPush Change Detection erzwingt immutable Patterns.',
    },
    {
      title: 'Performante Chart-Rendering',
      problem: 'Chart.js re-renderte bei jeder Transaktion, was zu Performance-Problemen führte.',
      solution:
        'OnPush Change Detection für Chart-Komponenten, memoization von Berechnungen, Backend-seitige Aggregation für Dashboard-KPIs statt Client-side Filterung großer Datensätze.',
    },
    {
      title: 'Datenbank-Modellierung',
      problem:
        'Balance zwischen Normalisierung (keine Redundanz) und Performance (schnelle Queries für Dashboard).',
      solution:
        'Relationales Schema mit Foreign Keys für Datenintegrität, strategische Indizes auf häufig gefilterten Feldern (user_id, account_id, date), Prisma Migrations für versioniertes Schema-Management.',
    },
  ];

  readonly learnings = [
    'Full-Stack TypeScript: End-to-End Type Safety zwischen Frontend und Backend spart Debugging-Zeit und verhindert Runtime-Fehler.',
    'Prisma ORM: Bietet exzellente Developer Experience mit typsicheren Queries, Migrations und automatischer Client-Generierung.',
    'Docker: Vereinfacht lokale Entwicklung massiv - ein "pnpm db:up" und die Datenbank läuft konsistent.',
    'Monorepo: PNPM Workspaces ermöglichen effizientes Dependency Management und Code-Sharing zwischen Apps.',
  ];

  readonly improvements = [
    'Dark Mode: Implementierung eines Dark Mode Themes für bessere User Experience.',
    'Recurring Transactions: Automatische Erstellung wiederkehrender Transaktionen (Miete, Gehalt).',
    'Multi-Currency Support: Unterstützung mehrerer Währungen für internationale Nutzer.',
    'Data Export: CSV/PDF Export für Steuererklärung und Archivierung.',
    'Investment Tracking: Erweiterung um Aktien, ETFs und Krypto-Tracking.',
    '2FA: Two-Factor Authentication für erhöhte Sicherheit.',
  ];
}
