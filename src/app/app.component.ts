import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabItem } from './share/domain';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>;
  path$: Observable<string>;
  handleTabSelected(tab: TabItem) {
    this.router.navigate([tab.link]);
  }
  getSelectedIndex(tab: string) {
    return tab === 'recommend' ? 1 : tab === 'category' ? 2 : tab === 'chat' ? 3 : tab === 'my' ? 4 : 0;
  }
  prepareRoute(outlet: RouterOutlet) {
    // tslint:disable-next-line:no-string-literal
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.selectedIndex$ = this.router.events.pipe(
      // tap(e => console.log(e, 'tap')),
      filter(ev => ev instanceof NavigationEnd),
      map((e: NavigationEnd) => {
        const arr = e.url.split('/');
        // console.log(arr);
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(path => this.getSelectedIndex(path))
    );
    this.path$ = this.router.events.pipe(filter(ev => ev instanceof NavigationEnd), map((e: NavigationEnd) => {
      const arr = e.url.split('/');
      return arr[1];
    }));
  }

}
