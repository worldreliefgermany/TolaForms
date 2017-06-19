import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormdefService } from '../../shared/formdef.service';
import { FielddefService } from '../../shared/fielddef.service';

import { Fielddef } from '../../shared/fielddef.model';

@Component({
  selector: 'app-form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.css'],
  providers: [FielddefService]
})
export class FormDefinitionComponent implements OnInit {
    @ViewChild('f') formdef: NgForm;

    fields: Fielddef[] = [];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private formdefService: FormdefService,
                private fielddefSerivice: FielddefService ) { }

    ngOnInit() {
        console.log('ngOnInit... ' + this.route.snapshot.params['id']);
        this.fields = this.fielddefSerivice.fields;
    }

    onSubmitForm() {
        this.formdefService.addFormdef(this.formdef.value.name, this.fields);
        console.log(this.formdefService.forms);
    }

    onResetForm() {
        this.formdef.form.reset();
    }
}
