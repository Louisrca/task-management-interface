import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../shared/data/tasks.shared';
import { computed } from '@angular/core';
import { SidepanelComponent } from '../../shared/components/sidepanel/sidepanel.component';
import { EditSidepanelComponent } from '../../shared/components/editSidepanel/edit-sidepanel.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  standalone: true,
  imports: [SidepanelComponent, SidepanelComponent, EditSidepanelComponent],
})
export class TasksComponent {
  title = 'Hello Tasks Component';
  tasks = tasks;
  newTaskName = signal('');
  newTaskPriority = signal('low');
  newTaskStatus = signal('not-started');
  addTaskIcon = 'akarPlus';
  openSidepanel = signal(false);
  selectedTaskId = signal<string | null>(null);
  openEditSidepanel = signal(false);

  setOpenSidepanel() {
    this.openSidepanel.set(true);
  }

  statusList = computed(() => {
    const statuses = this.tasks().map((t) => t.status);
    return Array.from(new Set(statuses));
  });

  setSelectedTaskId(taskId: string | null) {
    this.selectedTaskId.set(taskId);
  }

  openTaskDetails(taskId: string) {
    console.log('🚀 ~ TasksComponent ~ openTaskDetails ~ taskId:', taskId);
    this.selectedTaskId.set(taskId);
    this.openEditSidepanel.set(true);
  }

  hasTasks(status: string) {
    return computed(() => this.tasks().some((task) => task.status === status));
  }

  taskCount = (status: string) =>
    computed(
      () => this.tasks().filter((task) => task.status === status).length
    );
}
