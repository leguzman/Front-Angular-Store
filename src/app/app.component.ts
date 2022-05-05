import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggle', [
      state('closed', style({
       marginLeft: '-220px'
      })),
      state('open', style({
        marginLeft: '-7px'
      })),
      transition('closed => open', [
        animate('.3s ease-in-out')
      ]),
      transition('open => closed', [
        animate('.3s ease-in-out')
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'Front';
  open = false;
  toggle(){
    this.open = !this.open;
    console.log(open);
    
  }
}
