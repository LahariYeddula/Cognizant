import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-card">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The requested portal page does not exist or has been moved.</p>
      <a routerLink="/" class="home-btn">Return to Home</a>
    </div>
  `,
  styles: [`
    .not-found-card { text-align: center; max-width: 500px; margin: 4rem auto; padding: 2rem; background: #fff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    h1 { font-size: 4rem; color: #e74c3c; margin: 0; }
    .home-btn { display: inline-block; margin-top: 1rem; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 4px; font-weight: 600; }
  `]
})
export class NotFoundComponent {}
