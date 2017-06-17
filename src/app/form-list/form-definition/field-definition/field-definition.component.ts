import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { FielddefService } from '../../../shared/fielddef.service';

@Component({
  selector: 'app-field-definition',
  templateUrl: './field-definition.component.html',
  styleUrls: ['./field-definition.component.css']
})
export class FieldDefinitionComponent implements OnInit {

    @ViewChild('f') fielddef: NgForm;

    constructor(private fielddefSerivice: FielddefService) { }

    ngOnInit() {
    }

    onAddField() {
        this.fielddefSerivice.addFielddef(
            this.fielddef.value.name,
            this.fielddef.value.label,
            this.fielddef.value.type,
            this.fielddef.value.required
        );
        console.log(this.fielddefSerivice.fields);
        this.fielddef.reset();
    }
}
