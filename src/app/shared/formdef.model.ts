import { Fielddef } from './fielddef.model';

export class Formdef {
    constructor(public name: string, fields: Fielddef[]) {}
}
