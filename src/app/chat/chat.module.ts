import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
