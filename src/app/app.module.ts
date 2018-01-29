import { FakeApiService } from './fake-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';

// const API_TOKEN = new OpaqueToken('ApiService');
import { Inject } from '@angular/core';
import { ApiService } from 'app/api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: ApiService, useClass: FakeApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
