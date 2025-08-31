import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../shared/data/tasks.shared';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [DatePipe],
  standalone: true,
})
export class HomeComponent {
  title = 'My Tasks';

  tasks = tasks;
}
