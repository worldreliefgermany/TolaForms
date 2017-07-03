import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Fielddef } from '../../../shared/fielddef.model';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {

    @Input() fields: Fielddef[];
    @Output() fieldlist = new EventEmitter<Fielddef[]>();

    constructor() { }

    ngOnInit() {
    }

    onDragAndDropFields($event: any) {
        // update the order value of fields as per user's drag and drop
        this.fields.forEach((item, index) => {
            item.order = index;
        });
        this.fieldlist.emit(this.fields);
    }
}
