import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private primengConfig: PrimeNGConfig,
    private route: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
