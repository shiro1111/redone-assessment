import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { RewardComponent } from './reward/reward.component';


const routes : Routes = [
  {
    path:'',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'',
        redirectTo: 'home'
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'reward',
        component: RewardComponent
      },
    ]
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
