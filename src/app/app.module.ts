import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HashwordsProvider } from './libs.providers'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    HashwordsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
