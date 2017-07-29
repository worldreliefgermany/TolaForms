import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FormdefService } from '../../shared/formdef.service';
import { Formdef } from '../../shared/formdef.model';

@Injectable()
export class FormResolve implements Resolve<any> {
    constructor(private formsService: FormdefService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.formsService.fetchForm(route.params['id']);
    }
}
