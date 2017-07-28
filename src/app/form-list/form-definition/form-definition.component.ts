import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
    fields: Fielddef[] = [];
    formdata: Formdef = {id: -1, name: '', description: '', isPublic: false, fields: this.fields};
    displayAddFieldForm = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formdefService: FormdefService) { }

    ngOnInit() {
        if (!this.formId) {
            this.formdefService.fetchForms().subscribe(
                (response: Response) => {
                    this.formdefService.forms = response.json();
                    this.formId = this.route.snapshot.params['id'];

                    if (this.formId) {
                        this.fields = this.formdefService.forms[this.formId].fields;
                        this.formdata = this.formdefService.forms[this.formId];
                    } else {
                        this.formdata = {id: -1, name: '', description: '', isPublic: false, fields: this.fields};
                    }
                },
                (error) => { console.log(error)},
            );
        }
    }

    onSubmitForm() {
        if (this.formId) {
            this.formdefService.updateFormdef(
                this.formId,
                this.formdef.value.name,
                this.formdef.value.description,
                this.formdef.value.isPublic,
                this.fields
            );
        } else {
            this.formdefService.addFormdef(
                this.formdef.value.name,
                this.formdef.value.description,
                this.formdef.value.isPublic,
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
        // this.displayAddFieldForm = (toggleFlag !== undefined) ?
        //     this.displayAddFieldForm = toggleFlag :
        //     this.displayAddFieldForm = !this.displayAddFieldForm;

        if (toggleFlag !== undefined) {
            this.displayAddFieldForm = toggleFlag;
        } else {
            this.displayAddFieldForm = !this.displayAddFieldForm;
        }

    }

    updateFieldList($event: any) {
        this.fields = $event;
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
    //     this.formdata.fields.forEach((item, index) => {
    //         item.order = index;
    //     });
    //     this.fields = this.formdata.fields;
    //     this.onSubmitForm();
    // }
}
