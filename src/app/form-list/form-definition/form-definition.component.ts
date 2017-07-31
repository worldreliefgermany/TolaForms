import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Response } from '@angular/http';

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
    // form: Formdef = {id: -1, name: '', description: '', isPublic: false, fields: [], };
    // form: Formdef;
    displayAddFieldForm = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formdefService: FormdefService) { }

    ngOnInit() {
        /*
        this.formId = this.route.snapshot.params['id'];
        if (this.formdefService.forms.length <= 0 ) {
            console.log('fetching forms from the form view');
            this.formdefService.fetchForms().subscribe(
                (response: Response) => {
                    this.formdefService.forms = response.json();
                    if (this.formId) {
                        this.form = this.formdefService.forms[this.formId];
                    }
                },
                (error) => { console.log(error)},
            );

        } else {
            if (this.formId) {
                this.form = this.formdefService.forms[this.formId];
            }
        }
        */
        // this.form = this.route.snapshot.data['forms'].json();
        this.formId = this.route.snapshot.data['forms'].json().id;
    }

    onSubmitForm() {
        console.log('this.formId: ' + this.formId);
        if (this.formId) {
            this.formdefService.updateFormdef(
                this.formId,
                this.formdef.value.name,
                this.formdef.value.description,
                this.formdef.value.isPublic,
                this.formdefService.getForm(this.formId).fields
            );
        } else {
            this.formdefService.addFormdef(
                this.formdef.value.name,
                this.formdef.value.description,
                this.formdef.value.isPublic,
                this.formdefService.getForm(this.formId).fields
            );
            console.log(this.formdefService.getForm(this.formId).fields);
            this.formId = this.formdefService.forms.length - 1;
        }
        this.router.navigate(['/forms', this.formId]);
    }

    onResetForm() {
        this.formdef.form.reset();
    }
    toggleAddForm(toggleFlag) {
        if (toggleFlag !== undefined) {
            this.displayAddFieldForm = toggleFlag;
        } else {
            this.displayAddFieldForm = !this.displayAddFieldForm;
        }

    }

    updateFieldList($event: any) {
        this.formdefService.getForm(this.formId).fields = $event;
        this.onSubmitForm();
    }

    saveFormRemotely(index: number) {
        this.formdefService.saveFormRemotely(index)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    // onDragAndDropFields($event: any) {
    //     // update the order value of fields as per user's drag and drop
    //     this.form.fields.forEach((item, index) => {
    //         item.order = index;
    //     });
    //     this.fields = this.form.fields;
    //     this.onSubmitForm();
    // }
}
