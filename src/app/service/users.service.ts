import { Injectable } from '@angular/core';
import { HttpClient,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup';
import { Login } from '../models/login';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})


export class UsersService {


  constructor(private http: HttpClient,
   
    
  ) { }

  signup(signup : Signup): Observable<any> {
    return this.http.post("http://localhost:8084/auth/signup", signup, { responseType: "text" });
  }
  signin(signin : Login): Observable<any> {
    return this.http.post("http://localhost:8084/auth/login", signin, { responseType: "text" });
  }
  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8084/users');
  }
 

 
}



  



 

