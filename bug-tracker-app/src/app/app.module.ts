import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UtilsModule } from './utils/utils.module';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe'

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugStatsComponent } from './bugTracker/views/bugStats.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
