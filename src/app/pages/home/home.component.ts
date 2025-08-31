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

  addTask(newTask: string) {
    const task = newTask.trim();
    if (!task) return;
    this.tasks.update((current) => [
      ...current,
      { name: task, status: 'not-started' },
    ]);
  }

  removeTask(index: number) {
    this.tasks.update((current) => current.filter((_, i) => i !== index));
  }
}
