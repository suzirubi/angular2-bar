import { Component, Input } from '@angular/core';
import { Keg } from './keg';




@Component({
  selector: 'keg-display',
  template: `
    <div *ngIf="keg">
      <ul>
        <li *ngFor="let keg of kegs">{{keg.name}}</li>
      </ul>
    </div>
  `
})

export class KegDisplayComponent {
  @Input()
  keg: Keg;
}


// <ul>
//   <li>BRAND</li>
//   <li *ngFor="let keg of kegs">{{keg.brand}}</li>
//   <li>PRICE</li>
//   <li *ngFor="let keg of kegs">{{keg.price}}</li>
//   <li>ALCOHOL CONTENT</li>
//   <li *ngFor="let keg of kegs">{{keg.alcoholContent}}</li>
// </ul>
