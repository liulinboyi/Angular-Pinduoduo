import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Channel, ImageSliderComponent, imageSlider } from 'src/app/share/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  // 由于没有@Input() 的属性，所以路由变化被忽略掉。
  // 解决 导入 private cd: ChangeDetectorRef，手动提醒angular
  slelctedTabLink = '';
  constructor(
    private activeroute: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef) { }

  channels: Channel[] = [];
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



  ngOnInit() {
    this.service.getChannels().subscribe( item => {
      this.channels = item;
    } );
    this.activeroute.paramMap.subscribe(params => {
      this.slelctedTabLink = params.get('tabLink');
      // 我这里发生变化了，请angular检查我。
      this.cd.markForCheck();
    });
  }

}
