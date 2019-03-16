import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminCategoriesComponent} from './admin-categories/admin-categories.component'
import {AdminBooksComponent} from './admin-books/admin-books.component'
import {AdminAuthorsComponent} from './admin-authors/admin-authors.component'
import {HomeComponent} from './home/home.component'
import {BooksComponent} from './books/books.component'
const routes:Routes =[
  {path:'admin',component:AdminLoginComponent},
  {path:'admin-categories',component:AdminCategoriesComponent},
  {path:'admin-books',component:AdminBooksComponent},
  {path:'admin-authors',component:AdminBooksComponent},
  {path:'home',component:HomeComponent},
  {path:'books',component:BooksComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
 
})
export class AppRoutingModule { }



