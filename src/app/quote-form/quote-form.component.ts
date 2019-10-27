import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';




@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote = new Quote("","","",new Date(),0,0);

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote)
    this.newQuote = new Quote("","","",new Date(),0,0);
  }
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm(){
     this.angForm =this.fb.group({
       author:['',Validators.required ]
     });
   }

  ngOnInit() {
  }

}
