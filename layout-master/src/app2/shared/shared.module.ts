import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {AuthGuard} from "./authguard.service"

import { NavbarComponent } from './navbar.component'


@NgModule({
    declarations: [NavbarComponent],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [NavbarComponent],
    providers: [AuthGuard]
})

export class SharedModule {


}
