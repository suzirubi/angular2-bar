import { Injectable } from '@angular/core';

import { Keg } from './keg';
import { KEGS } from './keg-list';

@Injectable()
export class KegService {
    getKegs(): Promise<Keg[]> {
      return Promise.resolve(KEGS);
    }
    getKegsSlowly(): Promise<Keg[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getKegs()), 2000);
    });
  }
}
