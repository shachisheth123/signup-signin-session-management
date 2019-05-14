import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    baseUrl="http://localhost:8081";

    constructor(private http:HttpClient){

    }

    registerNewUser(user: UserService):Observable<UserService>{
        return this.http.post<UserService>(this.baseUrl+"/user",user);
    }
    loginNewUser(email,password) : Observable<UserService>{
        return this.http.post<UserService>(this.baseUrl +email, +password);
    }
   

}