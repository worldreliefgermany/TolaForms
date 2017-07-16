import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Fielddef } from './fielddef.model';

@Injectable()
export class FormdefService {

    forms = [
        {
            id: 1,
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
            id: 2,
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

    constructor(private http: Http) {}

    // http://dev-v2.tolaactivity.app.tola.io/api/fieldtype/
    // http://dev-v2.tolaactivity.app.tola.io/api/customformfield/
    // http://dev-v2.tolaactivity.app.tola.io/api/customform/

    saveFormRemotely(index: number) {
        const url = 'http://dev-v2.tolaactivity.app.tola.io/api/customform/';
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Token xxxxx'});
        return this.http.post(url, this.forms[index], {headers: headers});
    }

    addFormdef(name: string, description: string, isPublic: boolean, fields: Fielddef[]) {
        this.forms.push({id: null, name: name, description: description, isPublic: isPublic, displayFields: true, fields: fields});
    }


    updateFormdef( id: number, name: string, description: string, isPublic: boolean, fields: Fielddef[]) {
        this.forms[id] = {id: id, name: name, description: description, isPublic: isPublic, displayFields: true, fields: fields};
    }

    addFielddef(id: number, fielddef: Fielddef) {
        fielddef.order = this.forms[id].fields.length;
        this.forms[id].fields.push(fielddef);
    }


    updateFielddef(id: number, fieldId: number, fielddef: Fielddef) {
        // console.log('num of fields in the form: ' + this.forms[id].fields.length);
        // console.log('fieldId to be updated ' + ( fieldId - 1) );
        // console.log('index at which field to be updated = ' + fieldId - 1);
        this.forms[id].fields[fieldId - 1] = fielddef;
    }
}
