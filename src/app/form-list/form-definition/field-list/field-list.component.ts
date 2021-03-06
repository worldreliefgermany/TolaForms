import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Fielddef } from '../../../shared/fielddef.model';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css']
})
export class FieldListComponent implements OnInit {

    @Input() fields: Fielddef[];
    @Output() fieldlist: EventEmitter<Fielddef[]> = new EventEmitter<Fielddef[]>();
    @Input() edit_mode = false;
    fieldIndexToEdit: boolean;

    constructor() { }

    ngOnInit() {
    }


    toggleEditForm(toggleFlag: boolean) {
        this.fieldIndexToEdit = false;
    }

    onDeleteField(field: Fielddef) {
        const index = this.fields.indexOf(field, 0);
        if (index > -1) {
            this.fields.splice(index, 1);
        }
        // TODO: make a call to the api to delete it remotely also.
    }

    onDragAndDropFields($event: any) {
        // update the order value of fields as per user's drag and drop
        this.fields.forEach((item, index) => {
            item.order = index;
        });
        this.fieldlist.emit(this.fields);
    }
}
