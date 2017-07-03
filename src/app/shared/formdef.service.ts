import { Injectable } from '@angular/core';

import { Fielddef } from './fielddef.model';

@Injectable()
export class FormdefService {
    forms = [
        {
            name: 'My Test Form 1',
            description: 'This the description for form # 1',
            isPublic: false,
            fields: [
                {name: 'name', label: 'What is your name?', type: 'text', required: true, order: 0},
                {name: 'age', label: 'How old are you?', type: 'number', required: false, order: 1},
                {name: 'gender', label: 'What is your gender?', type: 'text', required: true, order: 2},
            ]
        },
        {
            name: 'Your Test Form 2',
            description: 'This is some description for why this form exists',
            isPublic: true,
            fields: [
                {name: 'dob', label: 'Date of Birth', type: 'date', required: true, order: 0},
                {name: 'dept', label: 'Department', type: 'number', required: false, order: 1},
                {name: 'title', label: 'Title', type: 'text', required: true, order: 2},
                {name: 'experience', label: 'What is your level of experience?', type: 'text', required: true, order: 3},
            ]
        }
    ];

    addFormdef(
        name: string,
        description: string,
        isPublic: boolean,
        fields: {name: string, label: string, type: string, required: boolean, order: number}[]) {
        this.forms.push({
            name: name,
            description: description,
            isPublic: isPublic,
            fields: fields}
        );
    }


    updateFormdef( id: number, name: string, description: string, isPublic: boolean,
        fields: { name: string, label: string, type: string, required: boolean, order: number }[])
    {
        this.forms[id] = {
            name: name,
            description: description,
            isPublic: isPublic,
            fields: fields
        };
    }

    addFielddef(id: number, fielddef: Fielddef) {
        this.forms[id].fields.push(fielddef);
    }
}
