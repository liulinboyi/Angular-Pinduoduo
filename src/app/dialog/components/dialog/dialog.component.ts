import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  // templateUrl: './dialog.component.html',
  // styleUrls: ['./dialog.component.scss']
  template: `
  <div class="container">
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    height: 100%;
  }
  `]
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
