import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'
import { AuthGuard } from '../shared/authguard.service'
import {SupplyService} from './supply.service'

import { CreateSupplyComponent } from './supply-create.component'
import { SupplyListComponent } from './supply-list.component'


@NgModule({
    declarations: [
        CreateSupplyComponent,
        SupplyListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'supply/create/:demandId', component: CreateSupplyComponent, canActivate: [AuthGuard] },
            { path: 'supply/:demandId', component: SupplyListComponent, canActivate: [AuthGuard] }
        ]),
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [SupplyService],
})

export class SupplyModule {

}