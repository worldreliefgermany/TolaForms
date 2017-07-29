import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FormdefService } from '../shared/formdef.service';
import { Formdef } from '../shared/formdef.model';

@Injectable()
export class FormlistResolve implements Resolve<any> {
    constructor(private formsService: FormdefService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.formsService.fetchForms();
    }
}
// http://embed.plnkr.co/u2qR9J/
// https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
