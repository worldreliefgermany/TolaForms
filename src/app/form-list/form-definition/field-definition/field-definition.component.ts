import { Component, OnInit, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormdefService } from '../../../shared/formdef.service';
import { Fielddef } from '../../../shared/fielddef.model';

@Component({
  selector: 'app-field-definition',
  templateUrl: './field-definition.component.html',
  styleUrls: ['./field-definition.component.css']
})
export class FieldDefinitionComponent implements OnInit {

    @ViewChild('f') fieldAddForm: NgForm;
    formId: number;
    @Output() displayAddForm = new EventEmitter<boolean>();
    @Output() displayEditForm = new EventEmitter<boolean>();
    @Input() fieldToBeEdited: Fielddef;

    constructor(private route: ActivatedRoute,
                private formdefService: FormdefService) { }

    ngOnInit() {
        this.formId = this.route.snapshot.params['id'];
        if (!this.hasOwnProperty('fieldToBeEdited') ) {
           this.fieldToBeEdited = new Fielddef(-1, '', '', '', false, 0, []);
        }
    }

    onAddOption(event) {
        this.fieldToBeEdited.options.push({
            'value': this.fieldAddForm.value.newOptionValue,
            'displayText': this.fieldAddForm.value.newOptionText
        });
        this.fieldAddForm.form.controls.newOptionValue.setValue('');
        this.fieldAddForm.form.controls.newOptionText.setValue('');
    }

    deleteOption(optn) {
        const index = this.fieldToBeEdited.options.indexOf(optn, 0);
        if (index > -1) {
            this.fieldToBeEdited.options.splice(index, 1);
        }
    }

    onAddField(addAnother: boolean) {
        const newFieldId = this.formdefService.forms[this.formId].fields.length + 1;
        const field = new Fielddef(
            newFieldId,
            this.fieldAddForm.value.name,
            this.fieldAddForm.value.label,
            this.fieldAddForm.value.type,
            this.fieldAddForm.value.required,
            newFieldId,
            this.fieldToBeEdited.options,
            );
        // console.log('The fields length is: ' + this.formdefService.forms[this.formId].fields.length);
        this.formdefService.addFielddef(this.formId, field);
        this.fieldAddForm.reset();
        this.displayAddForm.emit(addAnother);
    }

    onUpdateField(addAnother: boolean) {
        this.fieldToBeEdited['name'] = this.fieldAddForm.value.name;
        this.fieldToBeEdited['label'] = this.fieldAddForm.value.label;
        this.fieldToBeEdited['type'] = this.fieldAddForm.value.type;
        this.fieldToBeEdited['required'] = this.fieldAddForm.value.required;
        this.fieldToBeEdited['order'] = this.fieldAddForm.value.order;
        this.fieldToBeEdited['id'] = this.fieldToBeEdited.id;
        this.fieldToBeEdited['options'] = this.fieldToBeEdited.options;
        this.formdefService.updateFielddef(this.formId, this.fieldToBeEdited.id, this.fieldToBeEdited);
        this.displayEditForm.emit(false);
        // TODO: Make a call to the server to update it remotely as well
    }

    resetAddForm() {
        this.fieldAddForm.reset();
        this.displayAddForm.emit(false);
    }
}
