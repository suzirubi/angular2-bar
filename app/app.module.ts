import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { KegDisplayComponent } from './keg-display.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, KegDisplayComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
