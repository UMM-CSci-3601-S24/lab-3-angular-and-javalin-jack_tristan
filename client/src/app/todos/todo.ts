export interface Todo {
  _id: string;
  owner: string;
  status: boolean;
  body: string;
  category: string;
}

export type TodoRole = 'admin' | 'editor' | 'viewer';
