import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import {RestangularModule ,Restangular} from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {DialogAddCategory} from './admin-categories/admin-categories.component'
import {DialogUpdateCategory} from './admin-categories/admin-categories.component'

import {DialogAddAuthor} from './admin-authors/admin-authors.component'
import {DialogUpdateAuthor} from './admin-authors/admin-authors.component'

import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { BooksComponent } from './books/books.component';
import { CategoryComponent } from './category/category.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service'
import {BookService} from './services/book.service'
import {CategoryService} from './services/category.service'
import { HttpClientModule } from '@angular/common/http';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service'

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminCategoriesComponent,
    AdminBooksComponent,
    AdminAuthorsComponent,
    DialogAddCategory,
    DialogUpdateCategory,
    DialogAddAuthor,
    DialogUpdateAuthor,
    IndexComponent,
    BooksComponent,
    CategoryComponent,
    AuthorsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [DialogAddCategory , DialogUpdateCategory,DialogAddAuthor , DialogUpdateAuthor],
  providers: [
    AuthService,
    BookService,
    CategoryService,
    ProcessHTTPMsgService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
