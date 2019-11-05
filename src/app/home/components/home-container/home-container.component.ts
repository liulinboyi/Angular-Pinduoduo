import { Component, OnInit, ViewChild, Inject, ChangeDetectionStrategy } from '@angular/core';
import { topMenu } from 'src/app/share/components';
import { Router } from '@angular/router';
import { HomeService } from '../../services';
import { token } from '../home-grand';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string) { }
  menus: topMenu[] = [];
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

    // this.menus = this.service.getTabs();
    this.service.getTabs().subscribe(item => {
      this.menus = item;
    });

  }

}
