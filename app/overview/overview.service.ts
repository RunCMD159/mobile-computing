import {Injectable} from '@angular/core';
import {BackendService} from "../shared/backend/backend.service";
import {Observable} from "tns-core-modules/data/observable";

@Injectable()
export class OverviewService {

    constructor(private backend: BackendService) {
    }

    public getAllProducts() {
        return this.backend.get('products');
    }
}