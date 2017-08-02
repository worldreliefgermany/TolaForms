import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormdefService } from './shared/formdef.service';
import { Response } from '@angular/http';

import { Formdef } from './shared/formdef.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formsService: FormdefService) { }

    ngOnInit() {
        // this.formsService.fetchForms().subscribe(
        //         (response: Response) => this.formsService.forms = response.json(),
        //         (error) => console.log(error)
        //     );
        // this.formsService.forms = this.route.snapshot.data['forms'].json();
    }
}
