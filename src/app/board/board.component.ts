import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../post.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [DatabaseService]
})
export class BoardComponent implements OnInit {
  replies: FirebaseListObservable<any[]>;
  @Input() activeBoard;
  @Input() threadShown;
  @Input() threads;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    // this.threads = this.databaseService.getThreads('Music');
  }
  loadThread(thread) {
    this.replies = thread.replies;
  }

  submitThread(title: string, post: string, board: string) {
    const newPost: Post = new Post(title, "url to image", post);
    this.databaseService.addThread(newPost, board);
  }

}
