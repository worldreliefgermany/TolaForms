import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
    @Input() displayAddForm = false;

    constructor(private route: ActivatedRoute,
                private formdefService: FormdefService) { }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
    }

    onAddField() {
        const fielddef = {
            name: this.fielddef.value.name,
            label: this.fielddef.value.label,
            type: this.fielddef.value.type,
            required: this.fielddef.value.required
        }
        this.formdefService.addFielddef(this.id, fielddef);
        console.log(this.formdefService.forms[this.id].fields);
        this.fielddef.reset();
    }
}
