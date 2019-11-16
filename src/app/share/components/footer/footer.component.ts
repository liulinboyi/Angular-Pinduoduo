import {
  Component,
  OnInit, Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  NgZone, AfterViewInit,
  AfterViewChecked } from '@angular/core';
import { TabItem } from '../../domain';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // 笨组件
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, AfterViewInit, AfterViewChecked {
  tabItems: TabItem[] = [
    {
      title: '首页',
      icon: '/assets/tabs/home.png',
      link: 'home',
      selectedIcon: '/assets/tabs/home_selected.png'
    },
    {
      title: '推荐',
      icon: '/assets/tabs/recommend.png',
      link: 'recommend',
      selectedIcon: '/assets/tabs/recommend_selected.png'
    },
    {
      title: '分类',
      icon: '/assets/tabs/category.png',
      link: 'category',
      selectedIcon: '/assets/tabs/category_selected.png'
    },
    {
      title: '聊天',
      icon: '/assets/tabs/chat.png',
      link: 'chat',
      selectedIcon: '/assets/tabs/chat_selected.png'
    },
    {
      title: '个人中心',
      icon: '/assets/tabs/my.png',
      link: 'my',
      selectedIcon: '/assets/tabs/my_selected.png'
    }
  ];
  @Input() selectedIndex = 0;
  @Input() selectedIndex$;
  @Output() tabSelected = new EventEmitter();
  constructor(private ngzone: NgZone) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.selectedIndex$.subscribe(
      (e) => {
        console.log(e);
        document.title =  this.tabItems[e].title;
      }
    );
    // this.ngzone.run(() => {
    //   console.log(document.title);

    // });

  }
  ngAfterViewChecked() {

  }
  toggleSelected(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[idx]);
    this.ngzone.run(() => {
      document.title = this.tabItems[idx].title;
    });
  }

}
