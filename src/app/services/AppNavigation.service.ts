import { Injectable, signal, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavLink } from '../models/navbar.model';

@Injectable({ providedIn: 'root' })
export class AppNavigationService {
  private currentPath = signal('');

  routes: NavLink[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'akarGrid' },
    { path: '/tasks', title: 'Tasks', icon: 'akarCalendar' },
    { path: '/messages', title: 'Messages', icon: 'akarInbox' },
  ];

  title = computed(() => {
    const current = this.currentPath();
    return this.routes.find((r) => current.includes(r.path))?.title ?? '';
  });

  isActive(path: string) {
    return this.currentPath().startsWith(path); // ou includes si tu veux partiel
  }

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => this.currentPath.set(event.urlAfterRedirects));
  }
}
