# Skills-Seite Implementierungsanleitung

## Übersicht
Die Skills-Seite präsentiert technische Kompetenzen in 5 übersichtlichen Kategorien mit verschiedenen Skill-Levels. Ziel ist es, technische Breite und Tiefe zu zeigen – übersichtlich, nicht überladen.

**Route:** `/skills`

## Struktur

### Komponenten-Dateien
- `src/app/pages/skills/skills.ts` - TypeScript Component
- `src/app/pages/skills/skills.html` - HTML Template
- `src/app/pages/skills/skills.scss` - SCSS Styling

### Skill-Kategorien
1. **Frontend** - Moderne Web-Entwicklung mit Angular und TypeScript
2. **Backend** - Server-seitige Entwicklung und API-Design
3. **Datenbanken** - Relationale und NoSQL Datenbanken
4. **DevOps & Tools** - Entwicklungswerkzeuge und Deployment
5. **Konzepte & Best Practices** - Architektur-Patterns und Entwicklungsstandards

## TypeScript Implementation

### Interfaces

```typescript
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
```

### Component

```typescript
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

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
```

### Helper-Methoden

**getLevelLabel()**: Übersetzt technische Level-Keys in leserfreundliche deutsche Labels
- `expert` → "Expert"
- `advanced` → "Fortgeschritten"
- `intermediate` → "Grundkenntnisse"

**getLevelColor()**: Gibt CSS-Klassen für farbcodierte Level zurück
- Wird für dynamisches Styling der Skill-Level-Badges verwendet

## HTML Template

### Struktur

```html
<div class="skills-page">
  <!-- Header Section -->
  <section class="skills-header">
    <h1>Skills & Technologien</h1>
    <p class="subtitle">Mein technisches Know-how im Überblick</p>
  </section>

  <!-- Skills Categories Grid -->
  <section class="skills-grid">
    @for (category of skillCategories; track category.title) {
      <mat-card class="category-card">
        <!-- Category Header -->
        <mat-card-header>
          <div class="category-icon">
            <mat-icon>{{ category.icon }}</mat-icon>
          </div>
          <mat-card-title>{{ category.title }}</mat-card-title>
          <mat-card-subtitle>{{ category.description }}</mat-card-subtitle>
        </mat-card-header>

        <!-- Skills List -->
        <mat-card-content>
          <div class="skills-list">
            @for (skill of category.skills; track skill.name) {
              <div class="skill-item">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level" [class]="getLevelColor(skill.level)">
                  {{ getLevelLabel(skill.level) }}
                </span>
              </div>
            }
          </div>
        </mat-card-content>
      </mat-card>
    }
  </section>

  <!-- Summary Section -->
  <section class="skills-summary">
    <mat-card>
      <mat-card-content>
        <div class="summary-content">
          <mat-icon>info</mat-icon>
          <div class="summary-text">
            <h3>Kontinuierliches Lernen</h3>
            <p>
              Ich halte mich stets über neue Technologien und Best Practices auf dem Laufenden und erweitere kontinuierlich mein Skillset durch Projekte, Dokumentationen und praktische Anwendung.
            </p>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  </section>
</div>
```

### Angular Control Flow

**@for Directives**: Angular 21 Syntax für Schleifen
- Iteriert über `skillCategories` Array
- Iteriert über `skills` innerhalb jeder Kategorie
- `track` Keyword für Performance-Optimierung

**Dynamic Class Binding**: `[class]="getLevelColor(skill.level)"`
- Wendet CSS-Klassen basierend auf Skill-Level an
- Ermöglicht farbcodierte Darstellung

## SCSS Styling

### Layout

```scss
.skills-page {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.skills-header {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.25rem;
    color: #666;
    margin: 0;
  }
}
```

### Grid System

```scss
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}
```

**Grid-Eigenschaften:**
- `auto-fit`: Automatische Anpassung der Spaltenanzahl
- `minmax(380px, 1fr)`: Minimale Breite 380px, flexible maximale Breite
- Responsive ohne Media Queries für Grid-Struktur

### Category Cards

```scss
.category-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  mat-card-header {
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
    margin-bottom: 1.5rem;

    .category-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin-bottom: 1rem;

      mat-icon {
        color: white;
        font-size: 28px;
        width: 28px;
        height: 28px;
      }
    }
  }
}
```

### Skill Items

```scss
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f9fafb;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    transform: translateX(4px);
  }

  .skill-name {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
  }

  .skill-level {
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.expert {
      background: #d1fae5;
      color: #065f46;
    }

    &.advanced {
      background: #dbeafe;
      color: #1e40af;
    }

    &.intermediate {
      background: #fef3c7;
      color: #92400e;
    }
  }
}
```

### Level Color Coding

- **Expert**: Grün (`#d1fae5` / `#065f46`)
- **Fortgeschritten**: Blau (`#dbeafe` / `#1e40af`)
- **Grundkenntnisse**: Gelb (`#fef3c7` / `#92400e`)

### Summary Section

```scss
.skills-summary {
  margin-top: 4rem;

  mat-card {
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border: 1px solid #667eea30;
  }

  .summary-content {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;

    mat-icon {
      flex-shrink: 0;
      font-size: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      color: #667eea;
    }

    .summary-text {
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #333;
        margin: 0 0 0.75rem 0;
      }

      p {
        font-size: 1rem;
        line-height: 1.7;
        color: #555;
        margin: 0;
      }
    }
  }
}
```

## Features

### 1. Kategorisierung
- 5 klare Kategorien mit Icons
- Jede Kategorie hat Titel, Icon, Beschreibung
- Logische Gruppierung verwandter Technologien

### 2. Skill-Level System
- **Expert**: Tiefgreifende Kenntnisse, produktive Nutzung
- **Fortgeschritten**: Solide Kenntnisse, regelmäßige Nutzung
- **Grundkenntnisse**: Vertrautheit, grundlegendes Verständnis

### 3. Visuelle Hierarchie
- Gradient-Header für Aufmerksamkeit
- Icon-basierte Kategorien für schnelle Orientierung
- Farbcodierte Level für sofortige Einschätzung

### 4. Interaktive Elemente
- Hover-Effekte auf Cards (translateY + Shadow)
- Hover-Effekte auf Skill-Items (translateX + Background)
- Smooth Transitions für professionelles Gefühl

### 5. Summary Section
- Info-Card für kontinuierliches Lernen
- Zeigt Entwickler-Mindset
- Gradient-Background für visuelles Interesse

## Responsive Design

### Desktop (> 768px)
- Grid mit automatischer Spaltenanzahl
- Volle Abstände und Padding
- Skill-Items horizontal ausgerichtet

### Mobile (≤ 768px)

```scss
@media (max-width: 768px) {
  .skills-page {
    padding: 2rem 1rem;
  }

  .skills-header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .skill-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    .skill-level {
      align-self: flex-start;
    }
  }

  .skills-summary {
    .summary-content {
      flex-direction: column;

      mat-icon {
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
```

**Mobile Anpassungen:**
- Single-Column Grid
- Kleinere Font-Sizes
- Vertikale Skill-Items (Name über Level)
- Reduzierte Abstände
- Kleinere Icons

## Material Design Integration

### Verwendete Komponenten
- `MatCardModule`: Card-Container mit Header, Content
- `MatIconModule`: Material Icons für Kategorien und Info
- `MatChipsModule`: (Optional für zukünftige Erweiterungen)

### Icons
- `web`: Frontend-Entwicklung
- `dns`: Backend/Server-Technologien
- `storage`: Datenbanken
- `build`: Tools und DevOps
- `lightbulb`: Konzepte und Best Practices
- `info`: Informations-Icon für Summary

## Best Practices

### 1. Type Safety
- Strikte Interfaces für `Skill` und `SkillCategory`
- Union Types für `level` Enum
- `readonly` Array für Immutability

### 2. Performance
- `track` in @for Loops für Change Detection
- Keine unnötigen Re-Renders
- Effizientes Grid-Layout

### 3. Maintainability
- Zentrale Datenverwaltung im Component
- Helper-Methoden für Logik-Extraktion
- Klare CSS-Klassennamen

### 4. User Experience
- Smooth Animations (0.2s - 0.3s)
- Hover-Feedback auf interaktiven Elementen
- Klare visuelle Hierarchie
- Responsive ohne Layout-Breaks

### 5. Accessibility
- Semantische HTML-Struktur
- Ausreichende Farbkontraste für Level-Badges
- Material Design Komponenten (inherent accessibility)

## Erweiterungsmöglichkeiten

### 1. Filter-Funktion
```typescript
selectedLevel: string | null = null;

getFilteredSkills(category: SkillCategory) {
  if (!this.selectedLevel) return category.skills;
  return category.skills.filter(s => s.level === this.selectedLevel);
}
```

### 2. Skill-Details Modal
- Click auf Skill → Modal mit Details
- Projekterfahrung, Zertifikate, Zeitraum

### 3. Skill-Proficiency Bars
- Visuelle Progress-Bars statt Text-Badges
- Prozentuale Darstellung

### 4. Sortierung
- Alphabetisch, nach Level, nach Kategorie
- Toggle-Buttons für Sortier-Optionen

### 5. Animationen
- Staggered Animations beim Page-Load
- Animierte Skill-Level-Änderungen

## Integration in Portfolio

### Routing
Die Skills-Seite ist bereits in `app.routes.ts` integriert:

```typescript
{
  path: 'skills',
  component: Skills,
}
```

### Navigation
Die Header-Navigation enthält bereits den Link:

```html
<a mat-button routerLink="/skills">Skills</a>
```

### Landing Page Preview
Die Landing Page enthält bereits einen Skills-Teaser, der zu `/skills` verlinkt.

## Zusammenfassung

Die Skills-Seite präsentiert technische Kompetenzen professionell und übersichtlich:

✅ 5 klare Kategorien (Frontend, Backend, Datenbanken, DevOps, Konzepte)  
✅ 3-stufiges Level-System mit Farbcodierung  
✅ Material Design mit Cards, Icons  
✅ Responsive Grid-Layout  
✅ Interaktive Hover-Effekte  
✅ Summary-Section für Entwickler-Mindset  
✅ Type-safe TypeScript Implementation  
✅ Performantes Rendering mit Angular Control Flow  

Die Implementierung zeigt technische Breite (viele Technologien) und Tiefe (unterschiedliche Level) ohne überladen zu wirken.
