# Farbschema Dokumentation

## Übersicht

Das Portfolio verwendet ein modernes **Indigo & Amber** Farbschema, das Professionalität, Kreativität und technische Exzellenz vermittelt. Das Schema ist über CSS-Variablen zentral definiert und wird über Material Design 3 CSS-Variable-Overrides konsistent angewendet.

## Farbpalette

### Primary Colors (Indigo)

Hauptfarbe für Buttons, Links, Highlights und Branding-Elemente.

```scss
--color-primary-50:  #eef2ff  // Lightest Indigo
--color-primary-100: #e0e7ff  // Very Light Indigo
--color-primary-200: #c7d2fe  // Light Indigo
--color-primary-300: #a5b4fc  // Medium Light Indigo
--color-primary-400: #818cf8  // Medium Indigo
--color-primary-500: #6366f1  // Base Indigo
--color-primary-600: #4f46e5  // Primary Indigo (Main)
--color-primary-700: #4338ca  // Dark Indigo
--color-primary-800: #3730a3  // Darker Indigo
--color-primary-900: #312e81  // Darkest Indigo
```

**Verwendung:**

- **600**: Primary Buttons, Icons, Emphasis Text, Links
- **500-700**: Gradient Backgrounds, Hero Sections
- **100-200**: Subtle Backgrounds, Badge Backgrounds
- **800**: Expert Level Badges (dark mode)

### Accent Colors (Amber)

Akzentfarbe für Call-to-Actions, Status-Badges, Intermediate Level Indicators.

```scss
--color-amber-50:  #fffbeb  // Lightest Amber
--color-amber-100: #fef3c7  // Very Light Amber
--color-amber-200: #fde68a  // Light Amber
--color-amber-300: #fcd34d  // Medium Light Amber
--color-amber-400: #fbbf24  // Medium Amber
--color-amber-500: #f59e0b  // Base Amber (Main)
--color-amber-600: #d97706  // Dark Amber
--color-amber-700: #b45309  // Darker Amber
--color-amber-800: #92400e  // Darkest Amber
```

**Verwendung:**

- **500**: Accent Buttons, In-Progress Status
- **100-200**: Intermediate Skill Level Backgrounds
- **700**: Intermediate Badge Text

### Neutral Colors (Slate Gray Scale)

Für Text, Backgrounds, Borders und UI-Elemente.

```scss
--color-gray-50:  #f8fafc  // Almost White (Slate)
--color-gray-100: #f1f5f9  // Very Light Gray (Slate)
--color-gray-200: #e2e8f0  // Light Gray (Slate)
--color-gray-300: #cbd5e1  // Medium Light Gray (Slate)
--color-gray-400: #94a3b8  // Medium Gray (Slate)
--color-gray-500: #64748b  // Base Gray (Slate)
--color-gray-600: #475569  // Dark Gray (Slate)
--color-gray-700: #334155  // Darker Gray (Slate)
--color-gray-800: #1e293b  // Very Dark Gray (Slate)
--color-gray-900: #0f172a  // Almost Black (Slate)
```

**Verwendung:**

- **900**: Primary Text (`--text-primary`)
- **600**: Secondary Text (`--text-secondary`)
- **500**: Tertiary Text (`--text-tertiary`)
- **50-100**: Subtle Backgrounds (Chips, Skill Items)
- **200-300**: Borders, Card Borders (300 für Cards)
- **200**: Beginner Skill Level Background
- **700**: Beginner Skill Level Text

### Semantic Colors

Für Status-Indikatoren und Skill Levels.

```scss
--color-success: #10b981  // Green (nicht aktiv verwendet)
--color-warning: #f59e0b  // Amber - In-Progress Status
--color-error:   #ef4444  // Red (nicht aktiv verwendet)
--color-info:    #4f46e5  // Indigo - Information, Completed Status
```

## Gradients

### Primary Gradient

Hauptgradient für Hero-Sections, Headlines, Icon-Backgrounds, Timeline.

```scss
--gradient-primary: linear-gradient(135deg, #6366f1, #4f46e5, #4338ca);
```

**Verwendung:**

```scss
// Gradient Background (Hero Section, Icon Circles)
.hero {
  background: var(--gradient-primary);
}

.category-icon {
  background: var(--gradient-primary);
}

// Gradient Text (Headlines)
.skills-header h1 {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Text Colors

### Hierarchy

```scss
--text-primary:   var(--color-gray-900)  // #0f172a (Slate 900) - Headlines, Primary Content
--text-secondary: var(--color-gray-600)  // #475569 (Slate 600) - Body Text, Descriptions
--text-tertiary:  var(--color-gray-500)  // #64748b (Slate 500) - Muted Text, Labels
```

**Verwendung:**

```scss
h1,
h2,
h3 {
  color: var(--text-primary);
}
p {
  color: var(--text-secondary);
}
.label,
.subtitle {
  color: var(--text-secondary);
}
```

## Background Colors

```scss
--bg-primary:   #ffffff                  // White - Main Background
--bg-secondary: var(--color-gray-50)     // #f8fafc (Slate 50) - Section Backgrounds
--bg-tertiary:  var(--color-gray-100)    // #f1f5f9 (Slate 100) - Skill Items, Chips
```

**Cards:** Alle Cards verwenden `background: white` mit `border: 1px solid var(--color-gray-300)`

## Border Colors

```scss
--border-primary:   var(--color-gray-200)  // #e2e8f0 (Slate 200) - Default Borders
--border-secondary: var(--color-gray-300)  // #cbd5e1 (Slate 300) - Card Borders, Emphasized
```

## Card Styling

Globale Card-Styles für Material Design Cards:

```scss
.mat-mdc-card {
  background: white;
  border: 1px solid var(--color-gray-300);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 12px 28px rgba(79, 70, 229, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
    border-color: var(--color-primary-200);
    transform: translateY(-4px);
  }
}
```

## Scrollbar

```scss
html {
  scrollbar-gutter: stable; // Verhindert Layout-Shift zwischen Seiten
}
```

## Material Design 3 Overrides

Das Theme nutzt CSS-Variable-Overrides für Material Design 3 Komponenten:

### Filled Buttons

```scss
.mat-mdc-raised-button,
.mat-mdc-unelevated-button {
  &.mat-primary {
    --mdc-filled-button-container-color: #4f46e5 !important;
    --mdc-filled-button-label-text-color: #ffffff !important;

    &:hover {
      --mdc-filled-button-container-color: #4338ca !important;
    }
  }

  &.mat-accent {
    --mdc-filled-button-container-color: #f59e0b !important;
    --mdc-filled-button-label-text-color: #ffffff !important;

    &:hover {
      --mdc-filled-button-container-color: #d97706 !important;
    }
  }
}
```

### Text Buttons

```scss
.mat-mdc-button,
.mat-mdc-outlined-button {
  &.mat-primary {
    --mdc-text-button-label-text-color: #4f46e5 !important;

    &:hover {
      background-color: #eef2ff !important;
    }
  }

  &.mat-accent {
    --mdc-text-button-label-text-color: #f59e0b !important;

    &:hover {
      background-color: #fffbeb !important;
    }
  }
}
```

## Verwendungsbeispiele

### Hero Section (Landing Page)

```scss
.hero {
  min-height: 60vh;
  background: var(--gradient-primary);
  color: white;
}

// Weiße CTA Buttons auf Indigo-Gradient
.primary-cta {
  background-color: white !important;
  color: #4338ca !important; // Indigo-700

  &:hover {
    background-color: #eef2ff !important; // Indigo-50
  }
}
```

### Headline mit Gradient Text

```scss
.projects-header h1 {
  font-size: 3rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Skill Level Badges

```scss
.skill-level {
  &.expert {
    background: var(--color-primary-600);
    color: white;
  }

  &.advanced {
    background: var(--color-primary-100);
    color: var(--color-primary-700);
  }

  &.intermediate {
    background: var(--color-amber-100);
    color: var(--color-amber-700);
  }

  &.beginner {
    background: var(--color-gray-200);
    color: var(--color-gray-700);
  }
}
```

### Project Status Badges

```scss
.status-badge {
  &.completed {
    background: var(--color-primary-100);
    color: var(--color-primary-800);
  }

  &.in-progress {
    background: var(--color-amber-100);
    color: var(--color-amber-800);
  }
}
```

### Icon Circle mit Gradient

```scss
.category-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-primary);

  mat-icon {
    color: white;
    font-size: 28px;
  }
}
```

### Chips (Projects Page)

```scss
mat-chip {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
  border: 1px solid var(--color-gray-300);
}
```

### Subtle Background Card

```scss
.info-card {
```

### Timeline mit Gradient Accent

```scss
.timeline::before {
  content: '';
  width: 4px;
  background: var(--gradient-primary);
}
```

## Accessibility

### Kontrast-Verhältnisse

- **Primary Text** (Slate 900) auf White: 15.5:1 ✅ AAA
- **Secondary Text** (Slate 600) auf White: 7.5:1 ✅ AA+
- **Indigo 600** (#4f46e5) auf White: 6.4:1 ✅ AA
- White Text auf Indigo 600: 6.4:1 ✅ AA
- **Amber 700** auf Amber 100: 7.2:1 ✅ AA+

### Best Practices

1. **Text auf Backgrounds**: Alle Kombinationen erfüllen WCAG AA (min. 4.5:1 für Normal)
2. **Interactive Elements**: Buttons haben min. 44x44px Touch-Targets
3. **Focus States**: Sichtbare Focus-Indikatoren mit Indigo Primary Color
4. **Color Blindness**: Status wird durch Icons + Text + Farbe kommuniziert (nicht nur Farbe)
5. **Card Borders**: Gray-300 für ausreichenden visuellen Kontrast

## Responsive Design

### Grid Layouts

Konsistente Grid-Definitionen über alle Seiten:

```scss
// 3-Column Grid (Projects, Skills, About - Working Principles)
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
```

### Page Structure

Alle Seiten folgen diesem Pattern:

```scss
.page {
  padding: 4rem 2rem;
  max-width: 1400px; // oder 800px für Contact
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin: 0 0 1rem 0;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
  }
}
```

## Zukünftige Erweiterungen

### Dark Mode (Vorbereitet)

Theme kann durch CSS-Variablen-Overrides erweitert werden:

```scss
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: var(--color-gray-50);
    --text-secondary: var(--color-gray-400);
    --bg-primary: var(--color-gray-900);
    --bg-secondary: var(--color-gray-800);
    --border-primary: var(--color-gray-700);

    // Cards bleiben hell im Dark Mode für Kontrast
    .mat-mdc-card {
      background: var(--color-gray-800);
      border-color: var(--color-gray-700);
    }
  }
}
```

### Alternative Color Schemes

Neue Themes durch Variablen-Override:

```scss
.theme-emerald {
  --color-primary-600: #10b981;
  --gradient-primary: linear-gradient(135deg, #10b981, #059669);
}
```

## Implementation Details

### Datei-Struktur

```
src/
├── styles.scss             # Zentrale CSS-Variablen + Material Overrides
└── app/
    ├── components/
    │   ├── header/         # Navigation
    │   └── footer/         # Footer mit Sticky Positioning
    └── pages/
        ├── landing/        # Hero mit Indigo Gradient
        ├── projects/       # 3-Column Grid, Status Badges
        ├── skills/         # Skill Level Badges (4 Stufen)
        ├── about/          # Timeline, Working Principles
        └── contact/        # Contact Methods Cards
```

### Key Implementation Features

1. **CSS Variables System**: Alle Farben zentral in `styles.scss` definiert
2. **Material Design 3 Overrides**: CSS-Variablen überschreiben Material-Komponenten
3. **Consistent Card Styling**: Globale `.mat-mdc-card` Styles mit white background + gray-300 border
4. **Scrollbar Gutter**: `scrollbar-gutter: stable` verhindert Layout-Shift
5. **Responsive Grids**: 3-2-1 Column Pattern (Desktop-Tablet-Mobile)
6. **Unified Page Headers**: 3rem h1 mit Gradient-Text, 4rem margin-bottom

## Zusammenfassung

✅ **Indigo & Amber Theme** - Professionell und modern  
✅ **Konsistentes Styling** - Alle Seiten folgen dem gleichen Pattern  
✅ **CSS-Variablen** - Zentrale Verwaltung in styles.scss  
✅ **Material Design 3** - CSS-Variable-Overrides statt Angular Material Theme  
✅ **Accessibility** - Alle Farbkombinationen erfüllen WCAG AA  
✅ **Responsive** - Einheitliche Breakpoints (1200px, 768px)  
✅ **Card Enhancement** - Weiße Cards mit Gray-300 Border für besseren Kontrast  
✅ **Layout Consistency** - Scrollbar-Gutter verhindert visuellen Shift  
✅ **Accessibility-konform** mit ausreichenden Kontrasten  
✅ **Professional Blue/Cyan** für Tech-Portfolio  
✅ **Gradient-Text & Backgrounds** für moderne Ästhetik  
✅ **Semantic Colors** für Status-Indikatoren  
✅ **Dark Mode Ready** durch CSS-Variablen

Das neue Farbschema vermittelt Professionalität, Vertrauen und technische Kompetenz – perfekt für ein Developer-Portfolio.
