export type Tasks = {
  id: string;
  name: string;
  status: string;
  priority?: string;
  dueDate?: Date;
  description?: string;
  assignedTo?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
