import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'web',
      description: 'Moderne Web-Entwicklung mit Angular und TypeScript',
      skills: [
        { name: 'Angular', level: 'advanced' },
        { name: 'TypeScript', level: 'advanced' },
        { name: 'RxJS', level: 'advanced' },
        { name: 'Angular Material', level: 'advanced' },
        { name: 'HTML5 & CSS3', level: 'expert' },
        { name: 'SCSS/SASS', level: 'advanced' },
        { name: 'Responsive Design', level: 'advanced' },
      ],
    },
    {
      title: 'Backend',
      icon: 'dns',
      description: 'Server-seitige Entwicklung und API-Design',
      skills: [
        { name: 'NestJS', level: 'advanced' },
        { name: 'Node.js', level: 'advanced' },
        { name: 'REST API', level: 'expert' },
        { name: 'JWT Authentication', level: 'advanced' },
        { name: 'Cloudflare Workers', level: 'intermediate' },
      ],
    },
    {
      title: 'Datenbanken',
      icon: 'storage',
      description: 'Relationale Datenbanken und ORMs',
      skills: [
        { name: 'PostgreSQL', level: 'advanced' },
        { name: 'Prisma', level: 'advanced' },
        { name: 'SQL', level: 'advanced' },
        { name: 'Datenbank-Normalisierung', level: 'advanced' },
        { name: 'Neon Database', level: 'intermediate' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'build',
      description: 'Entwicklungswerkzeuge und Deployment',
      skills: [
        { name: 'Git & GitHub', level: 'advanced' },
        { name: 'Docker', level: 'advanced' },
        { name: 'Nx Monorepo', level: 'advanced' },
        { name: 'GitHub Actions', level: 'intermediate' },
        { name: 'VS Code', level: 'advanced' },
        { name: 'npm/pnpm', level: 'advanced' },
        { name: 'Nginx', level: 'intermediate' },
        { name: 'Cloudflare Pages', level: 'intermediate' },
        { name: 'Render', level: 'intermediate' },
      ],
    },
    {
      title: 'Konzepte & Best Practices',
      icon: 'lightbulb',
      description: 'Architektur-Patterns und Entwicklungsstandards',
      skills: [
        { name: 'Clean Code', level: 'advanced' },
        { name: 'REST API Design', level: 'expert' },
        { name: 'Standalone Components', level: 'advanced' },
        { name: 'Dependency Injection', level: 'advanced' },
        { name: 'Policy-basierte Authorization', level: 'intermediate' },
        { name: 'Dokumentation', level: 'advanced' },
      ],
    },
  ];

  getLevelLabel(level: string): string {
    const labels: Record<string, string> = {
      expert: 'Expert',
      advanced: 'Fortgeschritten',
      intermediate: 'Grundkenntnisse',
    };
    return labels[level] || level;
  }

  getLevelColor(level: string): string {
    const colors: Record<string, string> = {
      expert: 'expert',
      advanced: 'advanced',
      intermediate: 'intermediate',
    };
    return colors[level] || '';
  }
}
