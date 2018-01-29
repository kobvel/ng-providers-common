import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }

  serviceCall() {
    console.log('I am api service instance call!');
  }
}
