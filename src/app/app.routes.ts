import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { TasksComponent } from './pages/tasks/tasks.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
