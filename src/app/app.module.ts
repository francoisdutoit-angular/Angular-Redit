// An NgModule describes how the application parts fit together. Every application has at least one Angular module, 
// the root module that you bootstrap to launch the application. By convention, it is usually called AppModule.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({

  //The module's declarations array tells Angular which components belong to that module.
  //As you create more components, add them to declarations.
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  //The module's imports array appears exclusively in the @NgModule metadata object. 
  //It tells Angular about other NgModules that this particular module needs to function properly.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //The providers array is where you list the services the app needs. When you list services here, they are available app-wide. 
  //You can scope them when using feature modules and lazy loading. For more information, see Providers.
  providers: [],
  //the root component that Angular creates and inserts into the index.html host web page.
  bootstrap: [AppComponent]
})

export class AppModule { }
