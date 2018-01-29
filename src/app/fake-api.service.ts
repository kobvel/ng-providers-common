import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';

@Injectable()
export class FakeApiService implements ApiService {

  constructor() { }

  serviceCall() {
    console.log('I am FAKE api service instance call!');
  }

}
