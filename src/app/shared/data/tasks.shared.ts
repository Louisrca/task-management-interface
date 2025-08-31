import { signal } from '@angular/core';
import { Tasks } from '../../models/tasks.model';

export const tasks = signal<Tasks[]>([
  {
    name: 'Styling Tasks components',
    status: 'not-started',
    priority: 'medium',
    dueDate: new Date('2025-07-05'),
    description: 'Improve the UI/UX of the tasks components.',
    assignedTo: ['Charlie'],
    createdAt: new Date('2025-06-22'),
    updatedAt: new Date('2025-06-23'),
  },
  {
    name: 'Add Backlog into Home Page',
    status: 'in-progress',
    priority: 'high',
    dueDate: new Date('2025-07-01'),
    description: 'Implement a backlog section to show pending tasks.',
    assignedTo: ['Alice', 'Bob'],
    createdAt: new Date('2025-06-20'),
    updatedAt: new Date('2025-06-25'),
  },
  {
    name: 'Implement Task Completion',
    status: 'completed',
    priority: 'low',
    dueDate: new Date('2025-07-10'),
    description: 'Add functionality to mark tasks as complete.',
    assignedTo: ['Dave'],
    createdAt: new Date('2025-06-25'),
    updatedAt: new Date('2025-06-30'),
  },
]);
