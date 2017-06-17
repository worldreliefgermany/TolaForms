import { Injectable } from '@angular/core';

@Injectable()
export class FielddefService {
    fields: [{'name': string, 'label': string, 'type': string, 'required': boolean}] =
        [{'name': 'dob', 'label': 'What is you DOB?', 'type': 'date', 'required': false}];

    addFielddef(name: string, label: string, type: string, required: boolean) {
        this.fields.push({name: name, label: label, type: type, required: required});
        console.log('fielddef created and pushed to forms array!');
    }


    updateFielddef(id: number, name: string,  label: string, type: string, required: boolean) {
        this.fields[id] = {name: name, label: label, type: type, required: required};
        console.log('fielddef updated!');
    }
}
