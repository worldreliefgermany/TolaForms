import { Component, OnInit } from '@angular/core';

import { Formdef } from '../shared/formdef.model';
import { Fielddef } from '../shared/fielddef.model';

import { FormdefService } from '../shared/formdef.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
    forms: Formdef[] = [];

    constructor(private formslistService: FormdefService) { }

    ngOnInit() {
        this.forms = this.formslistService.forms;
    }

}
