import { Component } from '@angular/core'
import {DemandService} from './demand.service'

import {Demand} from '../models/demand.model'

@Component({
    templateUrl: './demand-list.component.html'
})
export class DemandListComponent {

constructor(private _demandService:DemandService){

}
   public demands: any[] =this._demandService.GetAllDemands();

}