import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRouteModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports : [
        CommonModule,
        LoginRouteModule
    ],
    declarations: [LoginComponent]
})

export class LoginModule{
    
}