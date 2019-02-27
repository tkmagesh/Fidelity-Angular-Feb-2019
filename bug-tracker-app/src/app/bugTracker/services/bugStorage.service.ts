import { Bug } from '../models/Bug';

export class BugStorageService{
    private storage = window.localStorage;
    private maxBugId = 0;
    getAll() : Bug[]{
        let result : Bug[] = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            let key = this.storage.key(index),
                rawData = this.storage.getItem(key),
                bug = JSON.parse(rawData);
            result.push(bug);
            this.maxBugId = this.maxBugId > bug.id ? this.maxBugId : bug.id;
        }
        return result;
    }
    save(bug : Bug) : void {
        if (bug.id === 0){
            bug.id = ++this.maxBugId;
        }
        this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
    }

    remove(bug : Bug) : void{
        this.storage.removeItem(bug.id.toString());
    }
}