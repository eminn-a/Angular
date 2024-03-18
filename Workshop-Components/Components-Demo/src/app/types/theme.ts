// import { Post } from './post';
import { Post } from './post';
import { User } from './user';

export interface Theme {
  created_at: string;
  posts: Post[];
  subscribers: string[];
  themeName: string;
  updatedAt: string;
  userId: User;
  __v: number;
  _id: string;
}
