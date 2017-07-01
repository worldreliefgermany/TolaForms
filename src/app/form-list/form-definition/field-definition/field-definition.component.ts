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

    constructor(private route: ActivatedRoute,
                private formdefService: FormdefService) { }

    ngOnInit() {
        this.formId = this.route.snapshot.params['id'];
    }

    onAddField(addAnother: boolean) {
        const field = new Fielddef(
            this.fieldAddForm.value.name,
            this.fieldAddForm.value.label,
            this.fieldAddForm.value.type,
            this.fieldAddForm.value.required,
            this.fieldAddForm.value.order,
            );
        this.formdefService.addFielddef(this.formId, field);
        this.fieldAddForm.reset();
        this.displayAddForm.emit(addAnother);
    }

    resetAddForm() {
        this.fieldAddForm.reset();
        this.displayAddForm.emit(false);
    }
}
