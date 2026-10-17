import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('shows Space Jump among the selected projects on the home page', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = [...compiled.querySelectorAll('.highlight-projects .project-card')];
    const spaceJump = cards.find((card) => card.querySelector('h3')?.textContent === 'Space Jump');
    expect(cards).toHaveLength(3);
    expect(spaceJump?.querySelector('a[href="/projekte/space-jump"]')).toBeTruthy();
    expect(spaceJump?.querySelector('a[href="https://space-jump.ademdokur.dev"]')).toBeTruthy();
  });

  it('opens Space Jump from the projects page and returns to the list', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/projekte');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector<HTMLAnchorElement>('a[href="/projekte/space-jump"]');
    expect(link).toBeTruthy();
    link!.click();
    await fixture.whenStable();
    expect(compiled.querySelector('h1')?.textContent).toBe('Space Jump');
    expect(compiled.querySelectorAll('app-space-jump img')).toHaveLength(3);
    compiled.querySelector<HTMLAnchorElement>('app-space-jump .back-nav a')!.click();
    await fixture.whenStable();
    expect(router.url).toBe('/projekte');
    expect(compiled.querySelector('h1')?.textContent).toBe('Projekte');
  });
});
