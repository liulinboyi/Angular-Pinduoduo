import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-grid',
  templateUrl: './vertical-grid.component.html',
  styleUrls: ['./vertical-grid.component.scss']
})
export class VerticalGridComponent implements OnInit {

  @Input() width = '4rem';
  @Input() height = '4rem';
  @Input() gridGap = '5px';
  constructor() { }

  ngOnInit() {
  }

  get templateRows() {
    return `minmax(auto-fill, ${this.height})`;
  }
  get templateColums() {
    return `repeat(auto-fill, minmax(${this.width},1fr))`;
  }

}
