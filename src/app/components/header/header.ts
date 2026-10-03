import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LucideCodeXml, LucideMenu, LucideMoon, LucideSun, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    LucideCodeXml,
    LucideMenu,
    LucideMoon,
    LucideSun,
    LucideX,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly mobileMenuOpen = signal(false);
  readonly darkTheme = signal(false);
  private readonly document = inject(DOCUMENT);

  constructor() {
    const browserWindow = this.document.defaultView;
    let prefersDark = false;
    let savedTheme: string | null = null;

    try {
      savedTheme = browserWindow?.localStorage.getItem('portfolio-theme') ?? null;
      prefersDark = browserWindow?.matchMedia('(prefers-color-scheme: dark)').matches ?? false;
    } catch {
      savedTheme = null;
    }

    this.darkTheme.set(savedTheme === 'dark' || (savedTheme === null && prefersDark));
    this.applyTheme();
  }

  readonly navItems = [
    { label: 'Start', route: '/' },
    { label: 'Projekte', route: '/projekte' },
    { label: 'Skills', route: '/skills' },
    { label: 'Über mich', route: '/ueber-mich' },
    { label: 'Kontakt', route: '/kontakt' },
  ];

  readonly githubUrl = 'https://github.com/Ademdkr';

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.darkTheme.update((dark) => !dark);
    this.applyTheme();

    try {
      this.document.defaultView?.localStorage.setItem(
        'portfolio-theme',
        this.darkTheme() ? 'dark' : 'light',
      );
    } catch {
      return;
    }
  }

  private applyTheme(): void {
    this.document.documentElement.setAttribute('data-theme', this.darkTheme() ? 'dark' : 'light');
  }
}
