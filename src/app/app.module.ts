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

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminCategoriesComponent,
    AdminBooksComponent,
    AdminAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
