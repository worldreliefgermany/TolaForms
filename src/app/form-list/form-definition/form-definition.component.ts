import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
    fields: Fielddef[] = [];
    formdata: Formdef = {name: '', fields: this.fields};
    displayForm = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formdefService: FormdefService ) { }

    ngOnInit() {
        this.formId = this.route.snapshot.params['id'];
        if (this.formId) {
            this.fields = this.formdefService.forms[this.formId].fields;
            this.formdata = this.formdefService.forms[this.formId];
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
            this.formId = this.formdefService.forms.length - 1;
        }
        this.router.navigate(['/forms', this.formId]);
    }

    onResetForm() {
        this.formdef.form.reset();
    }
    toggleAddForm(toggleFlag) {
        console.log(toggleFlag);
        if (toggleFlag !== undefined) {
            this.displayForm = toggleFlag;
        } else {
            this.displayForm = !this.displayForm;
        }

    }
}
