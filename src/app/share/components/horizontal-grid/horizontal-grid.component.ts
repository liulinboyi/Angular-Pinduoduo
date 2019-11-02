import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {

  private _username: string = ''
  constructor() { }
  @Emoji() 
  result = 'hello'
  ngOnInit() {
    console.log(this.result);
  }
  @Output()
  usernameChange = new EventEmitter()
  // 变成输入型的属性
  @Input()
  public get username() {
    return this._username
  }
  public set username(value) {
    // 属性绑定
    this._username = value
    // 事件绑定
    this.usernameChange.emit(value)
  }
  @Confirmable('确定要执行吗？')
  handleClick(){
    console.log("点击已执行");
  }
  hello() {
    alert('hello!')
  }

}
