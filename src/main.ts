import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideIcons } from '@ng-icons/core';
import { akarHome, akarCalendar, akarInbox } from '@ng-icons/akar-icons';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
