import { Component, ViewChild, OnInit } from '@angular/core';
import { topMenu, imageSlider, ImageSliderComponent, Channel } from './share/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  channels: Channel[] = [
    {
      id: 0,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-11-13/298376dd8176f90df743de9f08a756eb.png',
      title: '限时秒杀',
      link: ''
    },
    {
      id: 1,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-07/678088ee2500f08a193ea8619bc0ae76.png',
      title: '断码清仓',
      link: ''
    },
    {
      id: 2,
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-03-14/a01571d7bde632029c76ad9a298570ec.png',
      title: '品牌馆',
      link: ''
    },
    {
      id: 3,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-03/d21a7598e29ce189a9a57bb234ee4fad.png',
      title: '多多果园',
      link: ''
    },
    {
      id: 4,
      icon: 'http://t01img.yangkeduo.com/images/2018-05-16/d86ceaeaa0bccaeb3b3dee76f64f0192.png',
      title: '9块9特卖',
      link: ''
    },
    {
      id: 5,
      icon: 'http://t05img.yangkeduo.com/images/2018-05-16/bf18833fa4c298a040fe01f279f6f6ec.png',
      title: '助力享免单',
      link: ''
    },
    {
      id: 6,
      icon: 'http://t10img.yangkeduo.com/images/2018-05-16/712fc1e7f4f7b0572257ef162b5185a9.png',
      title: '天天领现金',
      link: ''
    },
    {
      id: 7,
      icon: 'http://t05img.yangkeduo.com/images/2018-05-04/c71c9acd8b48203a704f6c0951caddc0.png',
      title: '1分抽大奖',
      link: ''
    },
    {
      id: 8,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-02/68aefda33f6afac045997edd25a3844e.png',
      title: '充值中心',
      link: ''
    },
    {
      id: 9,
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-01-20/d36b7af30da354cb2c8ad4ea7bd819cd.png',
      title: '每日好店',
      link: ''
    },
    {
      id: 10,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-08-01/f13e2dff54d604518a1db4facd89d300.png',
      title: '现金签到',
      link: ''
    },
    {
      id: 11,
      icon: 'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png',
      title: '金猪赚大钱',
      link: ''
    },
    {
      id: 12,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-11-26/ee327a5ee7fb7ff76a98cf71be967a20.png',
      title: '电器城',
      link: ''
    },
    {
      id: 13,
      icon: 'http://t03img.yangkeduo.com/images/2018-05-16/a666ac01e718dd06231a722baa6fa935.png',
      title: '爱逛街',
      link: ''
    },
    {
      id: 14,
      icon: 'http://t00img.yangkeduo.com/goods/images/2018-11-14/4ad66f8d7d28d6237a9f25b9a6d19f3e.png',
      title: '砍价免费拿',
      link: ''
    },
    {
      id: 15,
      icon: 'http://t11img.yangkeduo.com/images/2018-04-28/5cfc9925dac860135143921e0f687a7d.png',
      title: '帮帮免费团',
      link: ''
    }
  ];
  username = '';
  // #引用名 如果是angular组件的话可以使用#引用名，引用
  // @ViewChild('appSliders',{static: true}) appSliders: ImageSliderComponent
  // 如果是angular组件的话，可以使用，ImageSliderComponent 对象名称
  @ViewChild(ImageSliderComponent, {static: true}) appSliders: ImageSliderComponent;
  sliders: imageSlider[] = [{
    imageUrl: 'http://ngassets.twigcodes.com/banner001.png',
    link: '',
    caption: ''
  }, {
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
  }];
  scrollBackGroundColor = 'rgba(0,0,0,0.1)';
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
  ];
  colors = [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.2)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.4)',
    'rgba(0,0,0,0.5)'
  ];
  ngOnInit(): void {
    console.log(this.appSliders);
  }
  handleTabSelected(curTab) {
    console.log(curTab);
    this.scrollBackGroundColor = this.colors[Math.floor(Math.random() * this.colors.length - 1)];
  }
}
