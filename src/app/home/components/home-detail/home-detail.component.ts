import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Channel, ImageSliderComponent, imageSlider } from 'src/app/share/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map, switchMap, tap, catchError } from 'rxjs/operators';
import { Observable, Subscription, of } from 'rxjs';
import { Ad, Product } from 'src/app/share/domain';


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  // 由于没有@Input() 的属性，所以路由变化被忽略掉。
  // 解决 导入 private cd: ChangeDetectorRef，手动提醒angular
  // slelctedTabLink = '';
  // 将成员变量变成数据流Observable，在模板中使用，(slelctedTabLink$ | async)，有一个好处，避免了手动脏值检测。
  slelctedTabLink$: Observable<string>;
  channels$: Observable<Channel[]>;
  constructor(
    private activeroute: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef) { }

  channels: Channel[] = [];
  username = '';
  sub: Subscription;
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  show = false;
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


    this.slelctedTabLink$ = this.activeroute.paramMap.pipe(
      filter(item => item.has('tabLink')),
      map(item => item.get('tabLink')),
      tap(e => {
        console.log(e);
      }),
    );

    this.slelctedTabLink$.subscribe(e => {
      this.products$ = this.service.getProduct(e).pipe(
        catchError(error => {
          this.show = true;
          this.cd.markForCheck();
          throw of(error);
         },
         ), tap((item) => {
          this.show = false;
          this.cd.markForCheck();
         }));

      // 可观察对象，如果是请求api,那么多一次订阅，多一次请求
      // 并且，{{ products$ | async | json }} 在模板中使用，调试，同样也是多一次请求
      // this.products$.subscribe(item => {
      //     console.log(item, 'this.products$');
      //     this.show = false;
      //     this.cd.markForCheck();
      // });

      this.ad$ = this.service.getAdByTab(e).pipe(filter(item => item.length > 0),
      map(item => item[0]));

    });



    // 这样直接
    // this.slelctedTabLink$ = this.activeroute.paramMap
    // .pipe(filter(item => item.has('tabLink')),
    // map(item => item.get('tabLink')));
    // this.ad$ = this.slelctedTabLink$.pipe(
    //   switchMap(tab => this.service.getAdByTab(tab)),
    //   filter(ads => ads.length > 0),
    //   map(ads => ads[0]),
    // );
    // this.ad$.subscribe(() => {
    //   this.cd.markForCheck();
    // });
    // this.products$ = this.slelctedTabLink$.pipe(
    //   switchMap(tab => this.service.getProduct(tab))
    // );
    // this.products$.subscribe( () => {
    //   this.cd.markForCheck();
    // });


    // this.activeroute.paramMap
    // .pipe(filter(item => item.has('tabLink')),
    // map(item => item.get('tabLink')))
    // .subscribe(params => {
    //   // 此时params就是tabLink
    //   console.log('路径参数', params);
    //   this.slelctedTabLink = params;
    //   this.cd.markForCheck();
    // });
    this.sub = this.activeroute.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    // this.service.getChannels().subscribe( item => {
    //   this.channels = item;
    // } );
    this.channels$ = this.service.getChannels();
    // this.activeroute.paramMap.subscribe(params => {
    //   this.slelctedTabLink = params.get('tabLink');
    //   // 我这里发生变化了，请angular检查我。
    //   this.cd.markForCheck();
    // });
  }

  ngOnDestroy(): void {
    // 异步subscribe，destory的时候要取消掉订阅，防止内存泄露！
    this.sub.unsubscribe();
  }

}
