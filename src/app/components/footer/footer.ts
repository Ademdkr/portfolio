import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  readonly name = 'Adem Dokur';
  readonly githubUrl = 'https://github.com/Ademdkr';
  readonly email = 'mail@example.com';
}
