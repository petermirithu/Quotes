import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  QuotesComponent } from './quotes/quotes.component'
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  { path:'home', component: QuotesComponent},
  // { path:'auth', component: RegisterComponent},
  // { path: '',redirectTo:"/home",pathMatch:"full"},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
