import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User_Class } from './user';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  url_login: string = "http://localhost:3000/login/";
  
  constructor(public http: HttpClient) { }

  addUser(user){
    
    let body = JSON.stringify(user);
    
   return this.http.post(this.url_login, body,{headers:new HttpHeaders().set('Content-Type','application/json')} );
  }
  updateuser(user){
    let body = JSON.stringify(user);
    
    return this.http.put(this.url_login+user.UserId, body,{headers:new HttpHeaders().set('Content-Type','application/json')} );

  }
}
