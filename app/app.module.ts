import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCDhjF3LNn2qqYUivCkiyYD8lQMAzihz7I",
      libraries: ["places"]
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
