import { Component, Inject } from '@angular/core';
import { ApiService } from './api.service';
import { Hashwords, IHashwords } from './libs.providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor( @Inject(Hashwords) public hashwords: IHashwords) {

    const testHash = '90750f585b9ef687ed3eb54e911a4dd10153fc3dee51fc5548529adfdc3141fe';
    const humanHash = hashwords.hashStr(testHash);
    const randomString = hashwords.random();

    console.log('Human readbale hash:', humanHash);
    console.log('Random string:', randomString);
  }
}
