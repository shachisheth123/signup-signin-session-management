import { Component } from '@angular/core';
import { Login } from './app';
import { Router } from '@angular/router';
import { LoginService } from './app.service';
import { AuthenticateService } from './user/user-authenticate.service';




@Component({
  templateUrl: './welcome-login.component.html',
  styleUrls: ['./welcome-login.component.css']
})
export class WelcomeLoginComponent {
  user: Login;
  invalidLogin=false;

  submitted: boolean;

  constructor(private router: Router, private loginService: LoginService,
    private authenticateService : AuthenticateService) { }

  ngOnInit() {
    this.user = new Login();
  }

  loginUser() {
    alert("login method");
    //  this.submitted = true;
    console.log("form");
    console.log(this.user);

    let password = (<HTMLInputElement>document.getElementById("password")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;

    this.loginService.loginUser(email, password).subscribe((data) => {
      if(data!=null) {
          
        this.invalidLogin = this.authenticateService.authenticate(true,email);;
        this.router.navigate(['/home']);
      } 
      else
      this.invalidLogin = true;

    })
    
  }
}

     

// abc() {
//   this.submitted = true;
// }
// }