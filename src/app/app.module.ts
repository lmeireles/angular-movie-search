import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationModule} from './modules/authentication/authentication.module';
import {AppRoutingModule} from './core/routing/app-routing.module';
import {MoviesModule} from './modules/movies/movies.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    HttpClientModule,
    AuthenticationModule,
    MoviesModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
