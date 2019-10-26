import { Component, OnInit,Output} from '@angular/core';
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
  
]

toggle(index){
  this.quotes[index].showSubmitter = !this.quotes[index].showSubmitter;
}

deleteQuote(isDelete,index){
  if (isDelete){
    this.quotes.splice(index,1);
  }
}

// voteForQuote(Voting){
//   var votes;
//   if (Voting == true){
//     votes =+1
//   }else{

//   }
// }

addNewQuote(quote){
  this.quotes.push(quote)
  ;
}
  constructor() { }

  ngOnInit() {
  }

}
