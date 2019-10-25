import { Component, OnInit } from '@angular/core';
import {QuoteClass} from '../quote-class';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes:QuoteClass[] = [
  new QuoteClass("Why The Lucky Stiff", "when you dont create things you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create", "Pyra"),
  new QuoteClass("Linus Torvalds", "Talk is cheap. Show me the code.","Jedidah"),
  new QuoteClass("Harold Abelson","Programs must be written for people to read, and only incidentally for machines to execute.","Bernad"),
]
  constructor() { }

  ngOnInit() {
  }

}
