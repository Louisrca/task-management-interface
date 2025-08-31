import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../shared/data/tasks.shared';
import { computed } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
})
export class TasksComponent {
  title = 'Hello Tasks Component';
  tasks = tasks;
  newTaskName = signal('');
  newTaskPriority = signal('low');

  addTask() {
    const name = this.newTaskName().trim();
    const priority = this.newTaskPriority();
    if (!name) return;
    this.tasks.update((current) => [
      ...current,
      { name, status: 'not-started', priority },
    ]);

    this.newTaskName.set('');
  }

  todoCount = (status: string) =>
    computed(
      () => this.tasks().filter((task) => task.status === status).length
    );
}
