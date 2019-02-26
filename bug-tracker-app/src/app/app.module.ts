import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
