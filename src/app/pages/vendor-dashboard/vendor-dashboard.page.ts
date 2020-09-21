import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.page.html',
  styleUrls: ['./vendor-dashboard.page.scss'],
})
export class VendorDashboardPage implements OnInit {

  public folder: string;

  constructor(private menu: MenuController, private activatedRoute: ActivatedRoute) { }

  openMenu() {
    this.menu.open();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
