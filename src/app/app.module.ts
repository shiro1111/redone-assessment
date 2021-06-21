import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './view/dashboard/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import { SiteHeaderComponent } from './site-header/site-header.component';
import {SkeletonModule} from 'primeng/skeleton';
import {MenubarModule} from 'primeng/menubar';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { DashboardState } from './store/dashboard/dashboard.state';
import { DashboardService } from './store/dashboard/dashboard.service';
import { StoreModule } from './shared/module/store/store.module';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { LoginComponent } from './view/authentication/login/login.component';
import { RewardCardComponent } from './shared/component/reward-card/reward-card.component';
import { RewardFormComponent } from './shared/component/reward-form/reward-form.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RippleModule,
    AppRoutingModule,
    DropdownModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputSwitchModule,
    MenubarModule,
    SkeletonModule,
    StoreModule,
    ToastModule
  ],
  providers:[
    PrimeNGConfig,
    MessageService
  ],
  declarations: [ 
    AppComponent, 
    DashboardComponent, 
    LoginComponent,
    SiteHeaderComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
