import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.css']
})
export class FormDefinitionComponent implements OnInit {
    @ViewChild('f') formdef: NgForm;

    constructor(private router: Router, private route: ActivatedRoute ) { }

    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
    }

    onFormListLoad() {
        // this.router.navigate(['/'], { relativeTo: this.route});
        this.router.navigate(['/']);
    }

    onSubmitForm() {
        console.log(this.formdef.value);
    }

    onResetForm() {
        this.formdef.form.reset();
    }


    onDesignerOpen() {
        console.log('openning designer...');
    }
}
