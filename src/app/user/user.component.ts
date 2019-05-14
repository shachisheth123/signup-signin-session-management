import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './user-authenticate.service';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    email='shachisheth94@gmail.com'
    password='password'

    invalidLogin = false;

    constructor(private router:Router,private loginservice:AuthenticateService,private userservice:UserService){}

    ngOnIt(){

    }

    checkLogin() {
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        let password= (<HTMLInputElement>document.getElementById("password")).value;
  
        this.userservice.userLogin(email,password).subscribe((data)=>{
          if(data!=null) {
  
            this.invalidLogin = this.loginservice.authenticate(true,email);;
            this.router.navigate(['/user']);
          } 
          else
          this.invalidLogin = true;
  
        })

}
}

