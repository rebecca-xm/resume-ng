import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <app-menu></app-menu>
    <!-- <app-home></app-home> -->
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'angular-app';
}
