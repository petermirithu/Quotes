import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() isVote = new EventEmitter<boolean>();
  quoteDelete(Delete:boolean){
    this.isDelete.emit(Delete);
  }

  gonnaVote(Voting:boolean){
    this.isVote.emit(Voting);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
