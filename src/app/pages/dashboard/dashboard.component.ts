import { Component, Input, signal } from '@angular/core';
import { tasks } from '../../shared/data/tasks.shared';
import { DatePipe } from '@angular/common';
import { SidepanelComponent } from '../../shared/components/sidepanel/sidepanel.component';
import { EditSidepanelComponent } from '../../shared/components/editSidepanel/edit-sidepanel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [DatePipe, SidepanelComponent, EditSidepanelComponent],
  standalone: true,
})
export class DashboardComponent {
  openSidepanel = signal(false);
  openEditSidepanel = signal(false);
  selectedTaskId = signal<string | null>(null);

  tasks = tasks;

  openTaskDetails(taskId: string) {
    this.selectedTaskId.set(taskId);
    this.openEditSidepanel.set(true);
  }

  setOpenSidepanel() {
    this.openSidepanel.set(true);
  }
}
