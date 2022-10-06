import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  session: any;


  constructor(

  ) { }
  
 

  addUser(user: any){
    let users:any = [];
    if(localStorage.getItem('Users')){
      users = [user,...users];
    }
    else{
      users = [user]
    }
    localStorage.setItem('User',JSON.stringify(user))
  }

  
}


export class User {
  public title: string = '';
  public url: string = '';
  category: string = '';
}
