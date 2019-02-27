import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from './utils/utils.module';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugApiService } from './bugTracker/services/bugApi.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe'

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugEditComponent } from './bugTracker/views/bugEdit.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugEditComponent,
    BugStatsComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
    , BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
