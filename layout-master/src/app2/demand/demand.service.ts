import { Injectable } from "@angular/core"
import { Demand } from '../models/demand.model'

@Injectable()
export class DemandService {

    public GetAllDemands(): Demand[] {
        return [
            {DemandID:1001, ProjectName: 'Digital', CareerLevel: '10', Chargeable: true, Location: 'BLR', PrimarySkill: 'Java' },
            {DemandID:1002, ProjectName: 'Voice', CareerLevel: '9', Chargeable: false, Location: 'CDC', PrimarySkill: '.Net' }
        ];
    }
}