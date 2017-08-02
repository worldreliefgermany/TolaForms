import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FormdefService } from './shared/formdef.service';
import { Formdef } from './shared/formdef.model';

@Injectable()
export class FormlistResolve implements Resolve< Formdef[] > {
    constructor(private formsService: FormdefService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.formsService.fetchForms();
    }
}
