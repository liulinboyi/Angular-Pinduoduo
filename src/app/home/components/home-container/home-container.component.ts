import { Component, OnInit, ViewChild } from '@angular/core';
import { topMenu } from 'src/app/share/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router) { }
  menus: topMenu[] = [
    {
      title: '热门',
      link: 'hot'
    },
    {
      title: '男装',
      link: 'men'
    },
    {
      title: '百货',
      link: 'department'
    },
    {
      title: '运动',
      link: 'sports'
    },
    {
      title: '手机',
      link: 'mobile'
    },
    {
      title: '家纺',
      link: 'textile'
    },
    {
      title: '食品',
      link: 'food'
    },
    {
      title: '电器',
      link: 'appliance'
    },
    {
      title: '鞋包',
      link: 'shoes'
    },
    {
      title: '汽车',
      link: 'cars'
    },
    {
      title: '水果',
      link: 'fruits'
    },
    {
      title: '电脑',
      link: 'computers'
    },
    {
      title: '内衣',
      link: 'underwears'
    },
    {
      title: '家装',
      link: 'home'
    },
    {
      title: '母婴',
      link: 'baby'
    },
    {
      title: '美妆',
      link: 'makeup'
    },
    {
      title: '家具',
      link: 'furnitures'
    }
  ];
  scrollBackGroundColor = 'rgba(0,0,0,0.1)';
  colors = [
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0.2)',
    'rgba(0,0,0,0.3)',
    'rgba(0,0,0,0.4)',
    'rgba(0,0,0,0.5)'
  ];
  handleTabSelected(curTab) {
    console.log(curTab);
    this.router.navigate(['home', curTab.link]);
    this.scrollBackGroundColor = this.colors[Math.floor(Math.random() * this.colors.length - 1)];
  }
  ngOnInit() {
  }

}
