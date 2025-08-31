import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../shared/data/tasks.shared';
import { computed } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { akarPlus } from '@ng-icons/akar-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ akarPlus })],
})
export class TasksComponent {
  title = 'Hello Tasks Component';
  tasks = tasks;
  newTaskName = signal('');
  newTaskPriority = signal('low');
  newTaskStatus = signal('not-started');
  addTaskIcon = 'akarPlus';

  statusList = computed(() => {
    const statuses = this.tasks().map((t) => t.status);
    return Array.from(new Set(statuses));
  });

  hasTasks(status: string) {
    return computed(() => this.tasks().some((task) => task.status === status));
  }
  addTask() {
    const name = this.newTaskName().trim();
    const priority = this.newTaskPriority();
    const status = this.newTaskStatus();
    if (!name) return;

    this.tasks.update((current) => [...current, { name, status, priority }]);

    this.newTaskName.set('');
  }

  taskCount = (status: string) =>
    computed(
      () => this.tasks().filter((task) => task.status === status).length
    );
}
