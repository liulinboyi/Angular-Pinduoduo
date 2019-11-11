import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective {
  // 注解是一个函数
  @Input()
  @HostBinding('style.width')
  @HostBinding('style.height')
  avatarSize = '1.2rem';

  @HostBinding('style.border-radius')
  avatarRadius = '50%';

  @HostBinding('style.object-fit')
  avatarObjectFitMode = 'cover';
  constructor() { }

}
