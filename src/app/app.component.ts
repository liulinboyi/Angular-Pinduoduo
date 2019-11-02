import { Component, ViewChild } from '@angular/core';
import { topMenu, imageSlider, ImageSliderComponent } from './share/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = ''
  // #引用名 如果是angular组件的话可以使用#引用名，引用
  // @ViewChild('appSliders',{static: true}) appSliders: ImageSliderComponent
  // 如果是angular组件的话，可以使用，ImageSliderComponent 对象名称
  @ViewChild(ImageSliderComponent,{static: true}) appSliders: ImageSliderComponent
  ngOnInit(): void {
    console.log(this.appSliders);
  }
  sliders: imageSlider[] = [{
    imageUrl: 'http://ngassets.twigcodes.com/banner001.png',
    link: '',
    caption: ''
  },{
    imageUrl: 'http://ngassets.twigcodes.com/banner002.png',
    link: '',
    caption: ''
  },
  {
    imageUrl: 'http://ngassets.twigcodes.com/banner003.png',
    link: '',
    caption: ''
  },
  {
    imageUrl: 'http://ngassets.twigcodes.com/banner004.png',
    link: '',
    caption: ''
  },
  {
    imageUrl: 'http://ngassets.twigcodes.com/banner005.png',
    link: '',
    caption: ''
  }]
  scrollBackGroundColor = 'rgba(0,0,0,0.1)'
  menus: topMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
    {
      title: '鞋包',
      link: ''
    },
    {
      title: '汽车',
      link: ''
    },
    {
      title: '水果',
      link: ''
    },
    {
      title: '电脑',
      link: ''
    },
    {
      title: '内衣',
      link: ''
    },
    {
      title: '家装',
      link: ''
    },
    {
      title: '母婴',
      link: ''
    },
    {
      title: '美妆',
      link: ''
    },
    {
      title: '家具',
      link: ''
    }
  ]
  colors = [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.2)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.4)',
    'rgba(0,0,0,0.5)'
  ]
  handleTabSelected(curTab){
    console.log(curTab);
    this.scrollBackGroundColor = this.colors[Math.floor(Math.random() * this.colors.length - 1)]
  }
}
