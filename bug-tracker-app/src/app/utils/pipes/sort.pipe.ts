import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
    (p1 : any, p2 : any) : number
}


@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{
    private getComparerFor(attrName : string) : Comparer {
        return function(p1 : any, p2 : any) : number {
            if (p1[attrName] < p2[attrName]) return -1;
            if (p1[attrName] === p2[attrName]) return 0;
            return 1;
        }
    }

    private getDescendingComparerFor(comparer : Comparer) : Comparer{
        return function(p1 : any, p2 : any) : number {
            return comparer(p1, p2) * -1;
        }
    }
    transform(data : any[], attrName : string, isDescending : boolean = false) : any[] {
        if (!data || !data.length || !attrName) return data;
        let comparer =  this.getComparerFor(attrName);
        if (isDescending)
            comparer = this.getDescendingComparerFor(comparer);
        return data.sort(comparer);
    }
}