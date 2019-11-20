import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components';



@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
