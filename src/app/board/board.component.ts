import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

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

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    // this.threads = this.database.getThreads('Music');
  }
  loadThread(thread) {
    this.replies = thread.replies;
  }

}
