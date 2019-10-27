import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes:Quote[] = [
  new Quote("Harold Abelson","Programs must be written for people to read, and only incidentally for machines to execute.","Pyra",new Date(2019,9,4),5,2),
  new Quote("Why The Lucky Stiff", "when you dont create things you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.", "Bernad",new Date(2014,0,15),3,8),
  new Quote("Linus Torvalds", "Talk is cheap. Show me the code.","Jedidah",new Date(1999,8,24),8,5),  
];
  
toggle(index){
  this.quotes[index].showSubmitter = !this.quotes[index].showSubmitter;
}

deleteQuote(isDelete,index){
  if (isDelete){
    let toDelete = confirm(`Are you sure about deleting?`)
    if (toDelete){
      this.quotes.splice(index,1);
    }
  }
}

votingYes(isupVote,index){
  if(isupVote){
    this.quotes[index].upVote++
  }
  
}

votingNo(isdownVote,index){
  if(isdownVote){
    this.quotes[index].downVote++
  }
}
// @Output() highlight = new EventEmitter<void>();

addNewQuote(quote){
  if(quote){
    let toquote = confirm(`Are you sure About this quote?`)
    if(toquote)
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote);
  }
}
  constructor() { }

  ngOnInit() {
  }

}
