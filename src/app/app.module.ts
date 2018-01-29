import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeApiService } from './fake-api.service';
import { ApiService } from 'app/api.service';

import { HashwordsProvider } from './libs.providers'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: ApiService, useClass: FakeApiService },
    HashwordsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
