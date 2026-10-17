import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-space-jump',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './space-jump.html',
  styleUrl: './space-jump.scss',
})
export class SpaceJump {
  readonly demoUrl = 'https://space-jump.ademdokur.dev';
  readonly techStack = ['Phaser 3', 'TypeScript', 'Vite', 'Cloudflare Pages', 'D1'];

  readonly features = [
    {
      icon: 'sports_esports',
      title: 'Abwechslungsreiches Gameplay',
      description:
        'Gegnern ausweichen, Gold sammeln und den eigenen Rekord verbessern. Starbike, Starboard und Teleportation bieten unterschiedliche Bewegungsarten.',
    },
    {
      icon: 'auto_awesome',
      title: 'Equipment & Skins',
      description:
        'Waffen, Schild und Magnet verändern den Spielablauf. Skins, Sprite-Animationen, Partikeleffekte und separat regelbare Musik und Effekte ergänzen das Spielerlebnis.',
    },
    {
      icon: 'leaderboard',
      title: 'Online-Rangliste',
      description:
        'Mit Spielernamen und optionaler Landesflagge den persönlichen Rekord vergleichen. Das Spiel und die Rangliste sind auch ohne Registrierung zugänglich.',
    },
    {
      icon: 'touch_app',
      title: 'Desktop & Touch',
      description:
        'Tastatur- und Maussteuerung am Desktop sowie Touch-Bedienung auf Mobilgeräten. Das Starbike nutzt auf Touch-Geräten ein dynamisches Steuerpad.',
    },
  ];

  readonly technicalDetails = [
    {
      title: 'Von Vanilla JavaScript zu Phaser',
      description:
        'Das ursprüngliche Canvas-Spiel wurde auf Phaser 3 und TypeScript migriert. Getrennte Szenen für Laden, Hauptmenü, Equipment, Skins und Spiel sowie eigene Systeme für Spiellogik und Audio strukturieren die Anwendung.',
    },
    {
      title: 'Animation, Audio & Performance',
      description:
        'Sprite-Sheets und wiederverwendete Effekte begrenzen den Aufwand während des Spiels. Kleinere Texturen für Touch-Geräte und das Nachladen der Spielhintergründe reduzieren den Speicherbedarf beim Start. Audio-Ressourcen werden beim Szenenwechsel freigegeben.',
    },
    {
      title: 'Rangliste mit serverseitiger Prüfung',
      description:
        'Pages Functions und Cloudflare D1 speichern die Online-Rekorde. Spieler-Token werden serverseitig nur als Hash gespeichert. Laufzuordnung, Score-Grenzen und Laufdauer werden geprüft. Für den lokalen Betrieb existiert außerdem eine Node-API mit PostgreSQL.',
    },
    {
      title: 'Tests & Veröffentlichung',
      description:
        'Vitest sowie API- und Cloudflare-Tests prüfen Spielsysteme und Rangliste. GitHub Actions führt die Prüfungen vor dem Deployment aus. Entwicklung und Produktion nutzen getrennte Cloudflare-Deployments mit eigenen D1-Datenbanken.',
    },
  ];

  readonly screenshots = [
    {
      file: 'main-menu.png',
      title: 'Hauptmenü & Rangliste',
      description: 'Das Cockpit verbindet Spielstart, Rangliste und Zugang zu Skins und Equipment.',
      alt: 'Space-Jump-Hauptmenü im Cockpit-Stil mit Rangliste links und Start-Schaltfläche in der Mitte',
    },
    {
      file: 'equipment.png',
      title: 'Equipment',
      description: 'Bewegungsarten und Ausrüstung vor dem nächsten Lauf zusammenstellen.',
      alt: 'Equipment-Menü von Space Jump mit auswählbarer Ausrüstung',
    },
  ];
}
