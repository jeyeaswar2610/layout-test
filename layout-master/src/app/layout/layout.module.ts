import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/component/header/header.component';
import { NavbarComponent } from '../shared/component/navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        NavbarComponent,
        
    ]
})

export class LayoutModule{

}