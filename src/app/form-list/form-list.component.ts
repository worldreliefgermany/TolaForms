import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Formdef } from '../shared/formdef.model';
import { Fielddef } from '../shared/fielddef.model';

import { FormdefService } from '../shared/formdef.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
  encapsulation: ViewEncapsulation.None // Do not encapsulate css rules; propagate it to other comps.
})
export class FormListComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formsService: FormdefService) { }

    ngOnInit() {
        // this.formsService.forms = this.route.snapshot.data['forms'].json();
        // console.log(this.formsService.forms);
        // this.formsService.forms = this.route.snapshot.data['forms'];
    }
}
