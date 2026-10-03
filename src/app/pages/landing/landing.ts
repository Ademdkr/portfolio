import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideCodeXml,
  LucideExternalLink,
  LucideServerCog,
  LucideSettings,
} from '@lucide/angular';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  detailsUrl: string;
}

interface WorkArea {
  title: string;
  icon: 'server' | 'settings' | 'code';
  description: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-landing',
  imports: [
    RouterLink,
    LucideArrowRight,
    LucideCodeXml,
    LucideExternalLink,
    LucideServerCog,
    LucideSettings,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  readonly profile = {
    name: 'Adem Dokur',
    role: 'IT-Administrator & Anwendungsentwickler',
    description:
      'Ich betreue IT-Infrastruktur und SAP-Basis und entwickle Anwendungen, von ABAP und SAP-Fiori-Anpassungen bis Angular und NestJS.',
    githubUrl: 'https://github.com/Ademdkr',
  };

  readonly workAreas: WorkArea[] = [
    {
      title: 'IT-Administration',
      icon: 'server',
      description:
        'Netzwerk, Linux-Server, Backups und Ausfallsicherheit sowie Support für die internen Kolleginnen und Kollegen.',
    },
    {
      title: 'SAP-Basis',
      icon: 'settings',
      description:
        'Einrichtung von S/4HANA-Entwicklungssystemen, Rollen und Berechtigungen sowie Aktivierung von Fiori und Fiori-Apps.',
    },
    {
      title: 'Anwendungsentwicklung',
      icon: 'code',
      description:
        'ABAP, Anpassung von Fiori-Apps (UI5), Web Dynpro und OData-APIs sowie Webanwendungen mit Angular und NestJS.',
    },
  ];

  readonly highlightProjects: Project[] = [
    {
      title: 'Issue-Tracker',
      description:
        'Monorepo-basiertes Issue-Management-System mit JWT-Authentication, RBAC und Policy-basierter Authorization.',
      techStack: ['Angular 20', 'NestJS 11', 'PostgreSQL', 'Prisma ORM', 'Nx Monorepo'],
      liveUrl: 'https://issue-tracker.ademdokur.dev',
      detailsUrl: '/projekte/issue-tracker',
    },
    {
      title: 'Budget-Tracker',
      description:
        'Full-Stack-Webanwendung zur Verwaltung persönlicher Finanzen mit Chart.js Visualisierungen.',
      techStack: ['Angular 18', 'NestJS 10', 'PostgreSQL', 'Prisma ORM', 'Chart.js'],
      liveUrl: 'https://budget-tracker.ademdokur.dev',
      detailsUrl: '/projekte/budget-tracker',
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'IT-Administration',
      skills: ['Netzwerk', 'NixOS', 'Debian / Ubuntu', 'Backupstrategien', 'Reverse Proxy'],
    },
    {
      title: 'SAP',
      skills: ['S/4HANA 2025', 'Fiori / UI5', 'Web Dynpro', 'ABAP', 'OData'],
    },
    {
      title: 'Webentwicklung',
      skills: ['Angular', 'TypeScript', 'NestJS', 'Node.js', 'REST API', 'SCSS'],
    },
    {
      title: 'Datenbanken & Tools',
      skills: ['PostgreSQL', 'Prisma', 'SQL', 'Git & GitHub', 'Docker'],
    },
  ];
}
