import { User } from './user';

export interface Theme {
  created_at: string;
  posts: string[];
  subscribers: string[];
  themeName: string;
  updatedAt: string;
  userId: User;
  __v: number;
  _id: string;
}
