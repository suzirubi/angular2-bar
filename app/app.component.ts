import { Component } from '@angular/core';
import { Keg } from './keg';
import { KegService } from './keg.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Big Bar of Big Beers</h1>
  <h2>Big Beers</h2>
  <new-keg (newKegSender)="addKeg($event)"><button (click)="newButtonHasBeenClicked()">New</button></new-keg>
  <ul>
    <li *ngFor="let keg of kegs" [class.selected]="keg === selectedKeg" (click)="onSelect(keg)">{{keg.name}}</li>
  </ul>
  <div  *ngIf="keg">
  <keg-display [keg]="selectedKeg" (clickSender)="editKeg($event)"></keg-display>
  </div>
  <hr>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  </div>
  `,
  providers: [KegService]
})

export class AppComponent implements OnInit {
  kegs: Keg[];
  selectedKeg: Keg;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  constructor(private kegService: KegService) { }

  getKegs(): void {
    this.kegService.getKegs().then(kegs => this.kegs = kegs);
  }

  ngOnInit(): void {
    this.getKegs();
  }

  onSelect(keg: Keg): void {
    this.selectedKeg = keg;
  }
  addKeg(newKegfromChild: Keg) {
    this.KegService.push(newKegfromChild);
  }

}
