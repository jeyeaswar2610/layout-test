import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from "./user.service"

import { LoginComponent } from './login.component'

@NgModule({
    declarations: [LoginComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }

        ]),
        ReactiveFormsModule
    ],
    providers: [
        UserService
    ]



})

export class UserModule {

}