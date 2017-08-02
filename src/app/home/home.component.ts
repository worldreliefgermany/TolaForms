import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormdefService } from '../shared/formdef.service';
import { Response } from '@angular/http';

import { Formdef } from '../shared/formdef.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formsService: FormdefService) { }

  ngOnInit() {
      this.formsService.forms = this.route.snapshot.data['forms'];
  }

}
