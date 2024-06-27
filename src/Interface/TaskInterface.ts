export interface Task {
  id: string;
  taskname: string;
  description: string;
  type: string;
  assigners: {
    name: string;
    profileIcon?: string;
  }[];
  dueDate: string;
  creator: string;
  link: string;
  profileIcon: string;
  currentStatus?: "backlog" | "in-progress" | "done";
//   commnents: TaskCommnents[];
}

export interface TaskCommnents {
  id: string;
  comment: string;
  commenter: string;
  profileIcon: string;
}
