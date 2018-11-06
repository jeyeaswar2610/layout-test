import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './supply-create.component.html'
})

export class CreateSupplyComponent implements OnInit {

    public demandId: number;
    public supplyForm:FormGroup;

    constructor(private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this._route.params.subscribe(params => this.demandId = params['demandId']);
        this.supplyForm=new FormGroup({
            ResourceName:new FormControl()
        });
    }

}