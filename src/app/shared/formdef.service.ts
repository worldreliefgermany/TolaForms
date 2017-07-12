import { Injectable } from '@angular/core';

import { Fielddef } from './fielddef.model';

@Injectable()
export class FormdefService {
    forms = [
        {
            name: 'My Test Form 1',
            description: 'This the description for form # 1',
            isPublic: false,
            displayFields: true,
            fields: [
                new Fielddef(1, 'name', 'What is your name?', 'text', true, 0),
                new Fielddef(2, 'age', 'How old are you?', 'number', false, 1),
                new Fielddef(3, 'gender', 'What is your gender?', 'text', true, 2),
            ]
        },
        {
            name: 'Your Test Form 2',
            description: 'This is some description for why this form exists',
            isPublic: true,
            displayFields: true,
            fields: [
                new Fielddef(1, 'dob', 'Date of Birth', 'date', true, 0),
                new Fielddef(2, 'dept', 'Department', 'number', false, 1),
                new Fielddef(3, 'title', 'Title', 'text', true, 2),
                new Fielddef(4, 'experience', 'What is your level of experience?', 'text', true, 3),
            ]
        }
    ];

    addFormdef(name: string, description: string, isPublic: boolean, fields: Fielddef[]) {
        this.forms.push({ name: name, description: description, isPublic: isPublic, displayFields: true, fields: fields});
    }


    updateFormdef( id: number, name: string, description: string, isPublic: boolean, fields: Fielddef[]) {
        this.forms[id] = { name: name, description: description, isPublic: isPublic, displayFields: true, fields: fields
        };
    }

    addFielddef(id: number, fielddef: Fielddef) {
        console.log(fielddef);
        this.forms[id].fields.push(fielddef);
    }


    updateFielddef(id: number, fieldId: number, fielddef: Fielddef) {
        console.log('num of fields in the form: ' + this.forms[id].fields.length);
        console.log('fieldId to be updated ' + ( fieldId - 1) );
        // console.log('index at which field to be updated = ' + fieldId - 1);
        this.forms[id].fields[fieldId - 1] = fielddef;
    }
}
