import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
    greetMessage : string = '[ Dummy greet message ]';

    onGreetClick(userName : string){
        //let userName = prompt('Enter the username :');
        this.greetMessage = `Hi ${userName}, Have a nice day!`;
    }
}