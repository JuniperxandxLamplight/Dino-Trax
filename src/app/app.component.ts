import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatabaseService]
})
export class AppComponent implements OnInit {
  title = 'Dino Trax';
  boards: FirebaseListObservable<any[]>;
  threads: FirebaseListObservable<any[]>;
  posts: FirebaseListObservable<any[]>;

  constructor(private database: DatabaseService){}

  ngOnInit() {
    this.boards = this.database.getBoards();
    // this.threads = this.database.getThreads('Music');
  }
  loadBoard(board) {
    this.threads = Object.keys(board);
  }

  storable(arg) {
    this.posts = arg
    console.log(arg);
  }
}
