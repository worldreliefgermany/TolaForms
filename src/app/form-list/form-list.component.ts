import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';

import { Formdef } from '../shared/formdef.model';
import { Fielddef } from '../shared/fielddef.model';

import { FormdefService } from '../shared/formdef.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
  encapsulation: ViewEncapsulation.None // Do not encapsulate css rules; propagate it to other comps.
})
export class FormListComponent implements OnInit {
    forms: Formdef[] = [];

    constructor(private formsService: FormdefService) { }

    ngOnInit() {
        if (this.forms.length <= 0) {
            this.formsService.fetchForms().subscribe(
                (response: Response) => {
                    this.formsService.forms = response.json();
                    this.forms = this.formsService.forms;
                },
                (error) => { console.log(error)},
            );

            this.forms = this.formsService.forms;
        }
    }

}
