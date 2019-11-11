import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';
import { topMenu } from 'src/app/share/components';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { token } from '../home-grand';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  selectedTabLink$: Observable<string>;
  url$: Observable<string>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HomeService,
    @Inject(token) private baseUrl: string) {
      // 这里不生效
      // router.events.pipe(
      //   tap(e => console.log(e, 'home')),
      //   filter(ev => ev instanceof NavigationEnd),
      //   map((e: NavigationEnd) => {
      //     const arr = e.url.split('/');
      //     // console.log(arr);
      //     return arr.length > 1 ? arr[1] : 'home';
      //   }),
      // );
     }
  menus: topMenu[] = [];
  menus$: Observable<topMenu[]>;
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
    console.log(this.baseUrl);
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      tap(e => console.log(e)),
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
    console.log(this.router.url);
    // 这个不起作用
    this.url$ = this.router.events.pipe(
      tap(e => console.log(e, 'home')),
      filter(ev => ev instanceof NavigationEnd),
      map((e: NavigationEnd) => {
        return e.url;
        // const arr = e.url.split('/');
        // console.log(arr);
        // return arr.length > 1 ? arr[1] : 'home';
      }),
    );
    // 这个只有切换路由后起作用
    this.router.events.subscribe(e => {
    });
    // this.menus = this.service.getTabs();
    this.menus$ = this.service.getTabs();

  }

}
