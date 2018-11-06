import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaincontainerComponent } from './maincontainer.component';
import { MaincontainerRoutingModule } from './maincontainer-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MaincontainerRoutingModule
    ],
    declarations: [
        MaincontainerComponent
    ]
})

export class MainContainerModule{

}