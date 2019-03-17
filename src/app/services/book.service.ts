import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import {book} from '../shared/book'
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
    getBooks():Observable<book[]>{
     return this.http.get<book[]>(baseURL+'goodreads/authors')
     .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    createBooks(book:book):Observable<book[]>{
      return this.http.post<book[]>(baseURL+'admin/books',{book})
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
     }
     updateBook(book:book,id:number):Observable<book[]>{
      return this.http.put<book[]>(baseURL+'admin/books/'+id,{book})
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
     }
     deleteBook(id:number):Observable<book[]>{
      return this.http.delete<book[]>(baseURL+'admin/books/'+id)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
     }

    getBook(id:number):Observable<book>{
      return this.http.get<book>(baseURL+'goodreads/books/'+id)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

    }
    addAndUpdateBook(rate:number,shelve:string,book_id:number){
      this.http.put(baseURL+'user/'+shelve,{rate:rate,book_id:book_id})
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    deleteUserBook(book_id:number){
      this.http.delete(baseURL+'users/books/'+book_id)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

    }
    getCategoryBooks(bookID:number):Observable<book>{
      return this.http.get<book>(baseURL+'goodreads/'+bookID+'/category_books')
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    getAuthorBooks(authorID:number){
      return this.http.get<book>(baseURL+'goodreads/'+authorID+'/author_books')
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    getWishlist():Observable<any>{
      return this.http.get<any>(baseURL+'users/wishlist')
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

    }
   getRead():Observable<any>{
    return this.http.get<any>(baseURL+'users/read')
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
   }
    getCurrent():Observable<any>{
      return this.http.get<any>(baseURL+'users/current')
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    } 

}
