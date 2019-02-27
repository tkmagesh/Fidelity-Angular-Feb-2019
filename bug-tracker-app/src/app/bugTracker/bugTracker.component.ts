import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];

    sortAttrName : string = 'name';
    sortDesc : boolean = false;

    /*
    bugOperations : BugOperationsService;

    constructor(_bugOperations : BugOperationsService){
        this.bugOperations = _bugOperations;
    }
    */

    constructor(public bugOperations : BugOperationsService){
       /* this.bugs.push(this.bugOperations.createNew('Server communication failure'))
        this.bugs.push(this.bugOperations.createNew('User actions not recognized'))
        this.bugs.push(this.bugOperations.createNew('Application not responding'))
        this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'))
        */
       this.bugs = this.bugOperations.getAll();
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
       this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.bugOperations.remove(closedBug));
       this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}