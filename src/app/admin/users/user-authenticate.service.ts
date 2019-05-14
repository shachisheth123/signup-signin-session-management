import { Injectable } from '@angular/core';

@Injectable({
  providedIn :'root'
})
export class Authenticationservice {

    constructor(){}

    authenticate(flag,username){

        if(flag){

            sessionStorage.setItem('username' , username)
            return false;

        }else{
            return true;
        }
    }

    isUserLoggedIn(){

        let user=sessionStorage.getItem('username')
        console.log(!(user==null))
    }

}