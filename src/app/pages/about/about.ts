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
      year: '10/2025 - 02/2026',
      title: 'Praxisprojekte & Weiterentwicklung',
      description:
        'Eigenständige Entwicklung vollständiger Full-Stack-Anwendungen zur praktischen Umsetzung und Vertiefung der erworbenen Fachkenntnisse in modernen Web-Technologien.',
      icon: 'rocket_launch',
    },
    {
      year: 'Seit 03/2026',
      title: 'IT-Administrator & Anwendungsentwickler',
      description:
        'Tätig bei der rimpido GmbH, einem SAP-Beratungsunternehmen. Verantwortung für interne IT, Netzwerk, SAP-Basis sowie die Anpassung von Fiori-Apps und Schnittstellen.',
      icon: 'work',
    },
  ];

  readonly workAreas: WorkingPrinciple[] = [
    {
      icon: 'dns',
      title: 'IT-Administration',
      description:
        'Betrieb und Weiterentwicklung der internen On-Prem-Umgebung auf Basis freier Software, vor allem Linux. Dazu gehören Netzwerk, Backup-Konzepte, Dokumentation und Support für die Kolleginnen und Kollegen sowie die Einführung neuer Dienste.',
    },
    {
      icon: 'settings_suggest',
      title: 'SAP-Basis',
      description:
        'Selbständige Einrichtung von S/4HANA-2025-Entwicklungssystemen, Pflege von Rollen und Berechtigungen sowie Installation und Aktivierung von Fiori und Fiori-Apps inkl. Rollenzuweisung.',
    },
    {
      icon: 'code',
      title: 'Anwendungsentwicklung',
      description:
        'Anpassung von Fiori-Apps (UI5), Entwicklung in ABAP und Web Dynpro sowie Bereitstellung von OData-APIs für Dritt- und externe Systeme.',
    },
  ];

  readonly workingPrinciples: WorkingPrinciple[] = [
    {
      icon: 'auto_awesome',
      title: 'Clean Code',
      description:
        'Lesbarer und wartbarer Code mit klarer Struktur und nachvollziehbarer Dokumentation',
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
        'Konstruktive Code-Reviews, verlässlicher Support für Kolleginnen und Kollegen und präzise Kommunikation',
    },
  ];

  readonly technicalInterests: string[] = [
    'IT-Infrastruktur & Netzwerk',
    'Linux (NixOS, Debian/Ubuntu)',
    'Self-Hosting & Open Source',
    'SAP-Basis',
    'SAP Fiori & UI5',
    'ABAP & OData',
    'Angular & RxJS',
    'NestJS & Node.js',
    'TypeScript & Type Safety',
    'Clean Architecture',
  ];
}
