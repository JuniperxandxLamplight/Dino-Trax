import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Post } from './post.model';

@Injectable()
export class DatabaseService {
  boards: FirebaseListObservable<any[]>;
  threads: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.boards = database.list('Boards');
  }

  getBoards() {
    return this.boards;
  }
  getThreads(board) {
    return this.database.object('Boards/' + board);
  }
  addThread(i: number, thread: Post, board: string) {
    this.database.list('Boards/' + board['$key'] + '/threads/2').child(i).setValue(thread);
  }
}
