import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote= new Quote("","","",new Date());  

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    
  }

  quotes:Quote[] = [
    new Quote("Harold Abelson","Programs must be written for people to read, and only incidentally for machines to execute.","Pyra",new Date(2019,9,4),5,2),
    new Quote("Why The Lucky Stiff", "when you dont create things you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.", "Bernad",new Date(2014,0,15),3,8),
    new Quote("Linus Torvalds", "Talk is cheap. Show me the code.","Jedidah",new Date(1999,8,24),8,5),  
  ];
  
  get sort() {
    return this.quotes.sort((a, b) => {
      return (b.upVote) as any  - (a.upVote) as any;
    });    
  }
  constructor() { }

  ngOnInit(){
  }

}
