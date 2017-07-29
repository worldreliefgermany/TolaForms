import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

import { Fielddef } from './fielddef.model';

@Injectable()
export class FormdefService {

    forms = [];
    api_url = 'http://dev-v2.tolaactivity.app.tola.io/api/customform/';
    headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Token xxx'});

    //     {
    //         id: 1,
    //         name: 'My Test Form 1',
    //         description: 'This the description for form # 1',
    //         isPublic: false,
    //         displayFields: true,
    //         fields: [
    //             new Fielddef(1, 'name', 'What is your name?', 'select', true, 0,
    //                 [{'value': 'joe', 'displayText': 'Joe Schmoe'},
    //                  {'value': 'bob', 'displayText': 'Bob Doe'}]
    //                  ),
    //             new Fielddef(2, 'age', 'How old are you?', 'number', false, 1, null),
    //             new Fielddef(3, 'gender', 'What is your gender?', 'text', true, 2, null),
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: 'Your Test Form 2',
    //         description: 'This is some description for why this form exists',
    //         isPublic: true,
    //         displayFields: true,
    //         fields: [
    //             new Fielddef(1, 'dob', 'Date of Birth', 'date', true, 0, null),
    //             new Fielddef(2, 'dept', 'Department', 'number', false, 1, null),
    //             new Fielddef(3, 'title', 'Title', 'text', true, 2, null),
    //             new Fielddef(4, 'experience', 'What is your level of experience?', 'text', true, 3, null),
    //         ]
    //     }
    // ];

    constructor(private http: Http) {}

    getForms() {
        this.fetchForms().subscribe(
            (response: Response) => { this.forms = response.json(); },
            (error) => { console.log(error)},
        );

        // const data = Observable.interval(1000); // emit data every second
        // data.subscribe(
        //     (number: number) => console.log('data received' + number),
        // );
        const myObservable = Observable.create( (observer: Observer<string>) => {
            setTimeout( () => {
                observer.next('first package');
            }, 2000);
            setTimeout( () => {
                observer.next('second package');
            }, 4000);
            setTimeout( () => {
                // observer.next('this does not work');
                observer.complete();
            }, 5000);
            setTimeout( () => {
                observer.next('third package');
            }, 6000);
        });

        myObservable.subscribe(
            (data: string) => { console.log(data); },
            (error: string) => { console.log(error); },
            () => { console.log('completed'); }
        )
    }

    // http://dev-v2.tolaactivity.app.tola.io/api/fieldtype/
    // http://dev-v2.tolaactivity.app.tola.io/api/customformfield/
    // http://dev-v2.tolaactivity.app.tola.io/api/customform/

    saveFormRemotely(index: number) {
        // const url = 'http://dev-v2.tolaactivity.app.tola.io/api/customform/';
        return this.http.post(this.api_url, this.forms[index], {headers: this.headers});
    }

    fetchForms() {
        // const url = 'http://dev-v2.tolaactivity.app.tola.io/api/customform/?format=json';
        return this.http.get(this.api_url, {headers: this.headers});
        /*.subscribe(
            (response: Response) => { this.forms = response.json(); },
            (error) => { console.log(error)},
        );
        return this.forms;
        */
    }

    fetchForm(id: number) {
        return this.http.get(this.api_url + id + '/', {headers: this.headers});
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
