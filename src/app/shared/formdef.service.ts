import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

import { Fielddef } from './fielddef.model';
import { Formdef } from './formdef.model';

@Injectable()
export class FormdefService {

    forms = [];
    api_url = 'http://dev-v2.tolaactivity.app.tola.io/api/customform/';
    headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Token xxx'});

    constructor(private http: Http) {}

    // http://dev-v2.tolaactivity.app.tola.io/api/fieldtype/
    // http://dev-v2.tolaactivity.app.tola.io/api/customformfield/
    // http://dev-v2.tolaactivity.app.tola.io/api/customform/

    saveFormRemotely(index: number) {
        return this.http.post(this.api_url, this.forms[index], {headers: this.headers});
    }

    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || 'Server error');
    }
    fetchForms() {
        return this.http.get(this.api_url, {headers: this.headers})
            .map( (response: Response) => {
                return <Formdef[]> response.json();
            }).catch(this.handleError);
        // return this.http.get(this.api_url, {headers: this.headers});
    }

    fetchForm(id: number) {
        return this.http.get(this.api_url + id + '/', {headers: this.headers});
    }

    saveForm(id: number, name: string, description: string, isPublic: boolean, fields: Fielddef[]) {
        if (id) {
            this.forms[id] = {id: id, name: name, description: description,
                isPublic: isPublic, displayFields: true, fields: fields};
        } else {
            this.forms.push({id: null, name: name, description: description,
                isPublic: isPublic, displayFields: true, fields: fields});
        }
    }

    getForm(id: number) {
        /*
        return Observable.create(observer => {
          setTimeout(() => {
            observer.next(this.forms.find((form) => form.id === id))
            observer.complete();
          }, 3000);
        });
        */
        return this.forms.find((form) => form.id === Number(id));
    }

    addFielddef(id: number, fielddef: Fielddef) {
        if (this.getForm(id).fields) {
            fielddef.order = this.getForm(id).fields.length;
            this.getForm(id).fields.push(fielddef);
        } else {
            this.getForm(id).fields = [fielddef];
        }
    }


    updateFielddef(id: number, fieldId: number, fielddef: Fielddef) {
        this.forms[id].fields[fieldId - 1] = fielddef;
    }
}
