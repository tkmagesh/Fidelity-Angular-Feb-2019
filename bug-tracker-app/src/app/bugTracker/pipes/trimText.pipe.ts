import { Pipe } from "@angular/core";

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe{
    transform(data : string) : string{
        return data.length < 30 ? data : data.substr(0,30) + '...';
    }
}