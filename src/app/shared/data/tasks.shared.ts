import { signal } from '@angular/core';
import { Tasks } from '../../models/tasks.model';

export const tasks = signal<Tasks[]>([
  {
    id: '1ea2b3c4-d5f6-7g8h-9i0j-k1l2m3n4o5p6',
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
    id: '2ea2b3c4-d5f6-7g8h-9i0j-k1l2m3n4o5p6',
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
    id: '3ea2b3c4-d5f6-7g8h-9i0j-k1l2m3n4o5p6',
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
