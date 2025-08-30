import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavLink } from './models/nav-link.model';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  url: string = '';

  constructor(private router: Router) {
    // Écoute les changements d’URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const formattedUrl = event.urlAfterRedirects
          .replace('/', '')
          .replace('-', ' ');

        this.url = formattedUrl.charAt(0).toUpperCase() + formattedUrl.slice(1);
      });
  }
  title = 'task-management-interface';
  routes: NavLink[] = [{ title: 'Home', url: '/home' }];
}
