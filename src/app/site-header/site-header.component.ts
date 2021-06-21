import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { MenuItem } from 'primeng/api';
import { LOGOUT } from '../store/auth/auth.action';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private store : Store
    
  ) { }

  ngOnInit(): void {

  }

  onLogout(){
    this.store.dispatch(new LOGOUT);
    this.router.navigate(['login'])
  }

}
