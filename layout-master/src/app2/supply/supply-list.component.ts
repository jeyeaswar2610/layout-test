import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { SupplyService } from './supply.service';
import { Supply } from '../models/supply.model';

@Component({
    templateUrl: 'supply-list.component.html'
})

export class SupplyListComponent implements OnInit {
    public supplies: Supply[];
    public demandId: number;
    constructor(private _route: ActivatedRoute, private _supplyService: SupplyService) {
    }

    ngOnInit(): void {
        this._route.params.subscribe(params => this.demandId = params['demandId']);
        this.supplies = this._supplyService.GetSupply(this.demandId);
    }
}