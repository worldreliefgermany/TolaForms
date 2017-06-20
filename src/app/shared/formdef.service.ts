import { Injectable } from '@angular/core';

import { Fielddef } from './fielddef.model';

@Injectable()
export class FormdefService {
    forms = [
        {
            name: 'My Test Form 1',
            fields: [
                {name: 'name', label: 'What is your name?', type: 'text', required: true},
                {name: 'age', label: 'How old are you?', type: 'number', required: false},
                {name: 'gender', label: 'What is your gender?', type: 'text', required: true},
            ]
        },
        {
            name: 'Your Test Form 2',
            fields: [
                {name: 'dob', label: 'Date of Birth', type: 'date', required: true},
                {name: 'dept', label: 'Department', type: 'number', required: false},
                {name: 'title', label: 'Title', type: 'text', required: true},
                {name: 'experience', label: 'What is your level of experience?', type: 'text', required: true},
            ]
        }
    ];

    addFormdef(name: string, fields: {name: string, label: string, type: string, required: boolean}[]) {
        this.forms.push({name: name, fields: fields});
    }


    updateFormdef(id: number, name: string, fields: {name: string, label: string, type: string, required: boolean}[]) {
        this.forms[id] = {name: name, fields: fields};
    }

    addFielddef(id: number, fielddef: Fielddef) {
        this.forms[id].fields.push(fielddef);
    }
}
