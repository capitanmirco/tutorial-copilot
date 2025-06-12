export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  lastLogin?: Date;
}

export enum UserRole {
  Admin = 'admin',
  Editor = 'editor',
  User = 'user',
  Guest = 'guest'
}
