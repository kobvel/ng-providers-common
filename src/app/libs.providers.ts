import { InjectionToken, ValueProvider } from '@angular/core';

interface IHashwords {
  hash: (hash: string) => string[];
  hashStr: (hash: string) => string;
  random: () => string[];
  randomStr: () => string;
}

const Hashwords: InjectionToken<IHashwords> = new InjectionToken<IHashwords>('hashwords');
const HashwordsProvider: ValueProvider = { provide: Hashwords, useValue: window['hashwords']() };

export { IHashwords, Hashwords, HashwordsProvider };
