import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormdefService } from '../../shared/formdef.service';

import { Fielddef } from '../../shared/fielddef.model';
import { Formdef } from '../../shared/formdef.model';

@Component({
  selector: 'app-form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.css'],
})
export class FormDefinitionComponent implements OnInit {
    @ViewChild('f') formdef: NgForm;
    formId: number;
    formdata: Formdef;
    fields: Fielddef[] = [];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formdefService: FormdefService ) { }

    ngOnInit() {
        this.formId = this.route.snapshot.params['id'];
        if (this.formId) {
            this.fields = this.formdefService.forms[this.formId].fields;
            this.formdata = this.formdefService.forms[this.formId];
            console.log(this.formdata);
        } else {
            this.formdata = {name: '', fields: this.fields};
        }

    }

    onSubmitForm() {
        if (this.formId) {
            this.formdefService.updateFormdef(
                this.formId,
                this.formdef.value.name,
                this.fields
            );
        } else {
            this.formdefService.addFormdef(
                this.formdef.value.name,
                this.fields
            );
        }
    }

    onResetForm() {
        this.formdef.form.reset();
    }
}
