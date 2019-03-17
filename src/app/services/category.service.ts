import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import {category} from '../shared/category';
import {book} from '../shared/book'
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
    getCategory(id:number):Observable<category> {
     return this.http.get<category>(baseURL+'goodreads/categories/'+id)
     .catch(error => { return this.processHTTPMsgService.handleError(error); });
    
    }
    getCategories():Observable<category[]>{
      return this.http.get<category[]>(baseURL+'goodreads/categories')
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
     
    }
    creatCategory(name:string):Observable<category[]>{
      return this.http.post<category[]>(baseURL+'admin/categories',{name:name})
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

    }
    updateCategory(name:string,id:number):Observable<category[]>{
      return this.http.put<category[]>(baseURL+'admin/categories/'+id,{name:name})
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

    }
    deleteCategory(id:number):Observable<category[]>{
      return this.http.delete<category[]>(baseURL+'admin/categories/'+id)
      .catch(error => { return this.processHTTPMsgService.handleError(error); });

    }
    


}
