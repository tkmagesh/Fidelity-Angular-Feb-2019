import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperations.service';

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
        <label for="">Bug Name :</label>
        <input type="text" #txtBugName>
        <input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
    </section>
    `
})
export class BugEditComponent{

    @Output()
    bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();
    
    constructor(private bugOperations : BugOperationsService){
    }
    onAddNewClick(newBugName : string){
        /*
        let newBug : Bug = this.bugOperations.createNew(newBugName);
        this.bugAdded.emit(newBug);
        */

        this.bugOperations
            .createNew(newBugName)
            .subscribe(newBug => this.bugAdded.emit(newBug));
    }

}