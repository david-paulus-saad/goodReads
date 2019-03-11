import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private restangular:Restangular) { }
  getAuthors():Observable<string>{
    return this.restangular.all('authors').getList();
  }
 getAuthor(id: number):Observable<string>{
   return this.restangular.one('authors',id).get()
 }
 setAuthor(author: string):Observable<string>{
   return this.restangular.all('authors').post(author)
 }   
 deleteAuthor(id: number):Observable<string>{
   return this.restangular.one('authors',id).remove()
 }    


//  updateAuthor(id:number,author:string):Observable<string>{
//   var baseUsers = this.restangular.one('/authors', id)
//   baseUsers.get().subscribe((user)=>{
//       user.name = author
//       user.username = author
//       user.email = author
//    return user.put()
//   })
//  }
 

}
