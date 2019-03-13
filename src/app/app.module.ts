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
import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth-interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminCategoriesComponent,
    AdminBooksComponent,
    AdminAuthorsComponent,
    DialogAddCategory
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  entryComponents: [DialogAddCategory],
  providers: [{
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
