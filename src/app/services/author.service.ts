import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import {author} from '../shared/author'

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  // getAuthors():Observable<string>{
    
  // }
//  getAuthor(id: number):Observable<string>{
//  }
 createAuthor(author: author):Observable<author[]>{
   return this.http.post<author[]>(baseURL+'admin/authors',author)
   .catch(error => { return this.processHTTPMsgService.handleError(error); });

 }  
 getAuthors():Observable<author[]>{
  return this.http.get<author[]>(baseURL+'goodreads/authors')
  .catch(error => { return this.processHTTPMsgService.handleError(error); });
 }

 deleteAuthor(id: number):Observable<author[]>{
  return this.http.delete<author[]>(baseURL+'admin/authors/'+id)
  .catch(error => { return this.processHTTPMsgService.handleError(error); });

 }    


 updateAuthor(id:number,author:author):Observable<author[]>{
  return this.http.put<author[]>(baseURL+'admin/authors/'+id,author)
  .catch(error => { return this.processHTTPMsgService.handleError(error); });
 }
 

}
