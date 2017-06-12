import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-definition',
  templateUrl: './form-definition.component.html',
  styleUrls: ['./form-definition.component.css']
})
export class FormDefinitionComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute ) { }

    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
    }

    onFormListLoad() {
        // this.router.navigate(['/'], { relativeTo: this.route});
        this.router.navigate(['/']);
    }
}
