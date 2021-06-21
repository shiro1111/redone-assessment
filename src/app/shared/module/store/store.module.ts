import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { DashboardService } from 'src/app/store/dashboard/dashboard.service';
import { DashboardState } from 'src/app/store/dashboard/dashboard.state';
import { AuthState, AuthStateModel } from 'src/app/store/auth/auth.state';
import { AuthService } from 'src/app/store/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      DashboardState,
      AuthState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot()
  ],
  exports:[
    NgxsModule,
    NgxsLoggerPluginModule,
  ],
  providers:[
    DashboardService,
    AuthService
  ]
})
export class StoreModule { }
