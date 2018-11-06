import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { AuthGuard } from '../shared/authguard.service'
import { DemandService } from './demand.service'

import { DemandCreateComponent } from './demand-create.component'
import { DemandListComponent } from './demand-list.component'

@NgModule({
  declarations: [
    DemandCreateComponent,
    DemandListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'demand/create', component: DemandCreateComponent, canActivate: [AuthGuard] },
      { path: 'demand', component: DemandListComponent, canActivate: [AuthGuard] }
    ]),
    SharedModule

  ],
  providers: [
    AuthGuard,
    DemandService
  ]
})

export class DemandModule {


}