import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly navItems = [
    { label: 'Start', route: '/' },
    { label: 'Projekte', route: '/projects' },
    { label: 'Skills', route: '/skills' },
    { label: 'Über mich', route: '/ueber-mich' },
    { label: 'Kontakt', route: '/kontakt' },
  ];

  readonly githubUrl = 'https://github.com/Ademdkr';
}
