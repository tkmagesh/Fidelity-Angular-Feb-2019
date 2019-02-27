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
       //this.bugs = this.bugOperations.getAll();
       this.bugOperations
        .getAll()
        .subscribe(bugs => this.bugs = bugs);
    }

   onNewBug(newBug : Bug){
       this.bugs.push(newBug);
   }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => 
                this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
    }

    onRemoveClosedClick(){
       /* this.bugs = this.bugs.filter(function(bug){
            return !bug.isClosed;
        });
        */
       this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => 
                this.bugOperations
                    .remove(closedBug)
                    .subscribe(bugs => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id))
            );
       
    }

   
}