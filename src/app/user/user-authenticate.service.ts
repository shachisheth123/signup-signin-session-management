import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
    providedIn:'root'
})
export class AuthenticateService{

constructor(private userservice:UserService){}

authenticate(flag,email){

    if(flag){
        sessionStorage.setItem('email',email)
        return false;
    }
    else{
        return true;
    }
}

isUserLoggedIn(){
    let user=sessionStorage.getItem('email')
    console.log(!(user===null))
    console.log("Hello")
    return (!user===null)
}

    
}