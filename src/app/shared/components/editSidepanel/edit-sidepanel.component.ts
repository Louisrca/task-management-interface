import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../data/tasks.shared';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { akarPanelRight, akarPlus } from '@ng-icons/akar-icons';

@Component({
  selector: 'app-edit-sidepanel',
  standalone: true,
  templateUrl: './edit-sidepanel.component.html',
  styleUrl: './edit-sidepanel.component.scss',
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({ akarPlus, akarPanelRight })],
})
export class EditSidepanelComponent {
  @Input() isOpen = signal(false);
  @Input() taskId: string | null = null;
  tasks = tasks;

  closeRightPanelIcon = 'akarPanelRight';

  get taskDetails() {
    return this.tasks().find((task) => task.id === this.taskId);
  }

  closeSidepanel() {
    this.isOpen.set(false);
  }
}
