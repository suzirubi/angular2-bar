import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg';




@Component({
  selector: 'keg-display',
  template: `
    <div>
    <h4>{{keg.name}}<button (click)="editButtonHasBeenClicked(currentKeg)">Edit!!!</button></h4>
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
  keg: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}



// priceColor(keg.price){
//   if (keg.price > 70){
//     return "bg-danger";
//   } else if (keg.price <= 70 && keg.price > 50) {
//     return "bg-warning";
//   } else if (keg.price <= 50 && keg.price > 30) {
//     return "bg-success";
//   } else {
//     return "bg-info";
//   }
// }
