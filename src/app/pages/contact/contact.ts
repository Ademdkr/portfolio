import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly email = 'adem.dokur@example.com';
  readonly github = 'https://github.com/Ademdkr';

  openEmail(): void {
    window.location.href = `mailto:${this.email}`;
  }

  openGitHub(): void {
    window.open(this.github, '_blank');
  }
}
