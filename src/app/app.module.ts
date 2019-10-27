import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { SumbitvalidDirective } from './sumbitvalid.directive';
import { HighlightDirective } from './highlight.directive';
import { FormsModule}   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
    DateCountPipe,
    QuoteFormComponent,
    SumbitvalidDirective,
    HighlightDirective,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
