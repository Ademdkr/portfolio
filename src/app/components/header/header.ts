import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly navItems = [
    { label: 'Start', link: '#start' },
    { label: 'Projekte', link: '#projekte' },
    { label: 'Skills', link: '#skills' },
    { label: 'Über mich', link: '#ueber-mich' },
    { label: 'Kontakt', link: '#kontakt' },
  ];

  readonly githubUrl = 'https://github.com/Ademdkr';

  scrollToSection(link: string): void {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
