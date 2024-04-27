// Angular import
import { Component } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// Project import
import { BerryConfig } from '../../../app-config';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {
  // public props
  berryConfig;
  navCollapsed: boolean;
  navCollapsedMob = false;
  windowWidth: number;

  // Constructor
  constructor(
    private location: Location,
    private locationStrategy: LocationStrategy,
    private http:HttpClient 
  ) {
    this.berryConfig = BerryConfig;

    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }

    if (current_url === baseHref + '/layout/theme-compact' || current_url === baseHref + '/layout/box') {
      this.berryConfig.isCollapse_menu = true;
    }

    this.windowWidth = window.innerWidth;
    this.navCollapsed = this.windowWidth >= 1025 ? BerryConfig.isCollapse_menu : false;
  }

  // public method
  navMobClick() {
    if (this.navCollapsedMob && !document.querySelector('app-navigation.coded-navbar')?.classList.contains('mob-open')) {
      this.navCollapsedMob = !this.navCollapsedMob;
      setTimeout(() => {
        this.navCollapsedMob = !this.navCollapsedMob;
      }, 100);
    } else {
      this.navCollapsedMob = !this.navCollapsedMob;
    }
  }
  ngOnInit():void{
    this.http.get('http://localhost:8084/users').subscribe(
      data =>console.log(data),
      err =>console.error(err)
  )}

}
