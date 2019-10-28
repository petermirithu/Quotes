import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;

  @Output() Delete = new EventEmitter<boolean>();

  @Output() isupVote = new EventEmitter<boolean>();
  @Output() isdownVote = new EventEmitter<boolean>();


  quoteDelete(Delete:boolean){
    this.Delete.emit(Delete);
  }

  upVote(yesvote:boolean){
    this.isupVote.emit(yesvote);
  }
  downVote(noVote:boolean){
    this.isdownVote.emit(noVote);
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}
