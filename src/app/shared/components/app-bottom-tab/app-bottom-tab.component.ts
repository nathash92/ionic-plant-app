import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bottom-tab',
  templateUrl: './app-bottom-tab.component.html',
  styleUrls: ['./app-bottom-tab.component.scss']
})
export class AppBottomTabComponent implements OnInit {

  @Input() activeTabKey = 'home';

  tabs: Array<any>;

  constructor() {
    this.tabs = [];
  }

  ngOnInit(): void {
    this.tabs = this.getTabs();
  }

  getTabs() {
    return [{
      key: 'home',
      icon: 'home-outline',
      activeIcon: 'home'
    }, {
      key: 'profile',
      icon: 'person-outline',
      activeIcon: 'person'
    }, {
      key: 'cart',
      icon: 'cart-outline',
      activeIcon: 'cart'
    }, {
      key: 'list',
      icon: 'list-outline',
      activeIcon: 'list'
    }];
  }

  onTabClick(data: any) {
    
  }

}
