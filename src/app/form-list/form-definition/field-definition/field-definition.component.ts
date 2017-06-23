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

    @ViewChild('f') fielddef: NgForm;
    id: number;
    @Output() displayAddForm = new EventEmitter<boolean>();

    constructor(private route: ActivatedRoute,
                private formdefService: FormdefService) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }

    onAddField(addAnother: boolean) {
        const field = {
            name: this.fielddef.value.name,
            label: this.fielddef.value.label,
            type: this.fielddef.value.type,
            required: this.fielddef.value.required
        }
        this.formdefService.addFielddef(this.id, field);
        this.fielddef.reset();
        if (addAnother === true) {
            this.displayAddForm.emit(true);
        } else {
            this.displayAddForm.emit(false);
        }
    }
}
