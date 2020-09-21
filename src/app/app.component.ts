import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/vendor-home',
      icon: 'mail'
    },
    {
      title: 'Products',
      url: '/vendor-products',
      icon: 'paper-plane'
    },
    {
      title: 'Orders',
      url: '/vendor-orders',
      icon: 'heart'
    },
    {
      title: 'Withdraw',
      url: '/vendor-withdraw',
      icon: 'archive'
    },
    {
      title: 'Settings',
      url: 'vendor-settings',
      icon: 'trash'
    },
    {
      title: 'Visit Store',
      url: '/vendor-store',
      icon: 'warning'
    },
    {
      title: 'Edit Account',
      url: '/vendor-edit-account',
      icon: 'warning'
    },
    {
      title: 'Log out',
      url: '/vendor-home',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('vendor-dashboard/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
