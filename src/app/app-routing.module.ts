import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './view/authentication/login/login.component';


const routes : Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    loadChildren: () => import('./view/dashboard/dashboard.module').then(m =>m.DashboardModule)

  },
  
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' }) 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
