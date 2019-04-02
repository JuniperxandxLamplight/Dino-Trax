import { Post } from './post.model';

export class Thread {
  content: Post[] = [];

  constructor (public title: string, public postCount: number) {}

}
