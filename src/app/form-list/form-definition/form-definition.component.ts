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
    @ViewChild('f') formElement: NgForm;
    formId: number;
    displayAddFieldForm = false;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formsService: FormdefService) { }

    ngOnInit() {
        // this.formId = this.route.snapshot.data['forms'].json().id;
        this.formId = this.route.snapshot.params['id'];
    }

    onSubmitForm() {
        this.formsService.saveForm(
            this.formId ? this.formId : null,
            this.formElement.value.name,
            this.formElement.value.description,
            this.formElement.value.isPublic,
            this.formsService.getForm(this.formId).fields
        );

        this.router.navigate(['/forms', this.formId]);
    }

    updateFieldList($event: any) {
        this.formsService.getForm(this.formId).fields = $event;
        this.onSubmitForm();
    }

    saveFormRemotely(id: number) {
        this.formsService.saveFormRemotely(id)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    toggleAddForm() {
        this.displayAddFieldForm = !this.displayAddFieldForm;
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
