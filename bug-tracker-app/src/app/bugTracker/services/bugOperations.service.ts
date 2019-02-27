import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
//import { BugStorageService } from './bugStorage.service';
import { BugApiService } from './bugApi.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{
    constructor(private bugApi : BugApiService){

    }

    createNew(bugName : string) : Observable<Bug>{
        let newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBug);
    }

    toggle(bug:Bug) : Observable<Bug> {
        bug.isClosed = !bug.isClosed;
        return this.bugApi.save(bug);
    }

    getAll() : Observable<Bug[]>{
        return this.bugApi.getAll();
    }

    remove(bug : Bug) : Observable<any> {
        return this.bugApi.remove(bug);
    }
}
/*
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
*/