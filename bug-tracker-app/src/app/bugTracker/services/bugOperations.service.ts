import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{
    constructor(private bugStorage : BugStorageService){

    }
    createNew(bugName : string) : Bug{
        let newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugStorage.save(newBug);
        return newBug;
    }

    toggle(bug:Bug) : void {
        bug.isClosed = !bug.isClosed;
        this.bugStorage.save(bug);
    }

    getAll() : Bug[]{
        return this.bugStorage.getAll();
    }

    remove(bug : Bug) : void {
        this.bugStorage.remove(bug);
    }
}