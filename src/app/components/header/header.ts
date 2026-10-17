import { DOCUMENT } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
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
export class Header implements OnDestroy {
  readonly mobileMenuOpen = signal(false);
  readonly darkTheme = signal(false);
  private readonly document = inject(DOCUMENT);
  private themeTransitionTimer?: number;

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
    this.applyTheme(true);

    try {
      this.document.defaultView?.localStorage.setItem(
        'portfolio-theme',
        this.darkTheme() ? 'dark' : 'light',
      );
    } catch {
      return;
    }
  }

  ngOnDestroy(): void {
    this.document.defaultView?.clearTimeout(this.themeTransitionTimer);
    this.document.documentElement.classList.remove('theme-switching');
  }

  private applyTheme(animate = false): void {
    const root = this.document.documentElement;
    const browserWindow = this.document.defaultView;

    if (animate && browserWindow) {
      browserWindow.clearTimeout(this.themeTransitionTimer);
      root.classList.remove('theme-switching');

      if (!browserWindow.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        root.classList.add('theme-switching');
        // Apply the shared transition before changing any theme colors.
        void root.offsetWidth;
        this.themeTransitionTimer = browserWindow.setTimeout(() => {
          root.classList.remove('theme-switching');
          this.themeTransitionTimer = undefined;
        }, 200);
      }
    }

    root.setAttribute('data-theme', this.darkTheme() ? 'dark' : 'light');
  }
}
