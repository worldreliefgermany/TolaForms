import { Component, OnInit } from '@angular/core';

import { FormdefService } from '../shared/formdef.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
    forms: {
            name: string,
            fields: {name: string, label: string, type: string, required: boolean}[]
        }[] = [];

    constructor(private formslistService: FormdefService) { }

    ngOnInit() {
        this.forms = this.formslistService.forms;
    }

}
