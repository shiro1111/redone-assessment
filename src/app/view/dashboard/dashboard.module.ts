import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {GalleriaModule} from 'primeng/galleria';
import {SkeletonModule} from 'primeng/skeleton';
import { SiteHeaderComponent } from 'src/app/site-header/site-header.component';
import { RewardCardComponent } from 'src/app/shared/component/reward-card/reward-card.component';
import { RewardComponent } from './reward/reward.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { RewardFormComponent } from 'src/app/shared/component/reward-form/reward-form.component';
@NgModule({
  declarations: [ 
    HomeComponent,
    RewardCardComponent,
    RewardComponent,
    RewardFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RippleModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputSwitchModule,
    CardModule,
    SkeletonModule,
    DialogModule,
    GalleriaModule,
    InputTextareaModule
  ],

  bootstrap:    [ DashboardComponent ]
})

export class DashboardModule { }
