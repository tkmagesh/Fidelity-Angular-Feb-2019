import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];

    /*
    bugOperations : BugOperationsService;

    constructor(_bugOperations : BugOperationsService){
        this.bugOperations = _bugOperations;
    }
    */

    constructor(public bugOperations : BugOperationsService){
        
    }

    onAddNewClick(newBugName : string){
        let newBug : Bug = this.bugOperations.createNew(newBugName);
        this.bugs.push(newBug);
    }

    onBugNameClick(bug : Bug){
        this.bugOperations.toggle(bug);
    }

    onRemoveClosedClick(){
       /* this.bugs = this.bugs.filter(function(bug){
            return !bug.isClosed;
        });
        */
       this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}