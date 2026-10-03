import { Component } from '@angular/core';
import { LucideCodeXml, LucideMail } from '@lucide/angular';

@Component({
  selector: 'app-footer',
  imports: [LucideCodeXml, LucideMail],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  readonly name = 'Adem Dokur';
  readonly githubUrl = 'https://github.com/Ademdkr';
  readonly email = 'kontakt@ademdokur.dev';
}
