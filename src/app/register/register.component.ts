import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  register;
  login;

  constructor(private userservice: UserService){}

  ngOnInit(){
    this.register={username:'',email:"",password:'',};
    this.login={username:'',password:'',};
  };

  usersignup(){
    this.userservice.registerUser(this.register).subscribe(
      response => {
        alert('User '+ this.register.username + 'has been created');
      },
      error => console.log('Error',error)
    )
  }

  usersignin(){
    this.userservice.loginUser(this.login).subscribe(
      response => {
        alert('User '+ this.login.username +' has successfully logged In');
      },
      error => console.log('Error',error)
    )
  }

}
