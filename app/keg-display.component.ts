import { Component, Input } from '@angular/core';
import { Keg } from './keg';




@Component({
  selector: 'keg-display',
  template: `
    <div *ngIf="keg">
    <h4>{{keg.name}}</h4>
      <ul>
        <li>{{keg.brand}}</li>
        <li>{{keg.price}}</li>
        <li>{{keg.alcoholContent}}</li>
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
