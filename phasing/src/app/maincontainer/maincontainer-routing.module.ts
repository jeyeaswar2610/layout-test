import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontainerComponent } from './maincontainer.component';

const routes: Routes = [
    {
        path: '', component: MaincontainerComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MaincontainerRoutingModule {
    
}