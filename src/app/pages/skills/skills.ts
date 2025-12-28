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
        { name: 'Angular', level: 'expert' },
        { name: 'TypeScript', level: 'expert' },
        { name: 'RxJS', level: 'advanced' },
        { name: 'Angular Material', level: 'advanced' },
        { name: 'HTML5 & CSS3', level: 'expert' },
        { name: 'SCSS/SASS', level: 'advanced' },
        { name: 'Responsive Design', level: 'advanced' },
        { name: 'Angular Signals', level: 'advanced' },
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
        { name: 'Express.js', level: 'advanced' },
        { name: 'GraphQL', level: 'intermediate' },
        { name: 'WebSockets', level: 'intermediate' },
      ],
    },
    {
      title: 'Datenbanken',
      icon: 'storage',
      description: 'Relationale und NoSQL Datenbanken',
      skills: [
        { name: 'PostgreSQL', level: 'advanced' },
        { name: 'MongoDB', level: 'advanced' },
        { name: 'TypeORM', level: 'advanced' },
        { name: 'Prisma', level: 'advanced' },
        { name: 'Mongoose', level: 'advanced' },
        { name: 'SQL', level: 'advanced' },
        { name: 'Redis', level: 'intermediate' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'build',
      description: 'Entwicklungswerkzeuge und Deployment',
      skills: [
        { name: 'Git & GitHub', level: 'expert' },
        { name: 'Docker', level: 'advanced' },
        { name: 'CI/CD', level: 'intermediate' },
        { name: 'VS Code', level: 'expert' },
        { name: 'npm/pnpm', level: 'expert' },
        { name: 'Postman', level: 'advanced' },
        { name: 'Linux', level: 'intermediate' },
      ],
    },
    {
      title: 'Konzepte & Best Practices',
      icon: 'lightbulb',
      description: 'Architektur-Patterns und Entwicklungsstandards',
      skills: [
        { name: 'Clean Code', level: 'advanced' },
        { name: 'REST API Design', level: 'advanced' },
        { name: 'SOLID Principles', level: 'advanced' },
        { name: 'Design Patterns', level: 'intermediate' },
        { name: 'Agile/Scrum', level: 'intermediate' },
        { name: 'Testing (Unit/E2E)', level: 'intermediate' },
        { name: 'Code Reviews', level: 'advanced' },
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
