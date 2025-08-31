import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../data/tasks.shared';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { akarPanelRight, akarPlus } from '@ng-icons/akar-icons';

@Component({
  selector: 'app-sidepanel',
  standalone: true,
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.scss',
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ akarPlus, akarPanelRight })],
})
export class SidepanelComponent {
  @Input() isOpen = signal(false);
  tasks = tasks;
  newTaskName = signal('');
  newTaskStatus = signal('');
  newTaskPriority = signal('low');
  addTaskIcon = 'akarPlus';
  closeRightPanelIcon = 'akarPanelRight';

  addTask() {
    const name = this.newTaskName().trim();
    const priority = this.newTaskPriority();
    const status = this.newTaskStatus();
    if (!name) return;

    this.tasks.update((current) => [
      ...current,
      { id: Date.now().toString(), name, status, priority },
    ]);

    this.newTaskName.set('');
  }

  closeSidepanel() {
    this.isOpen.set(false);
  }
}
