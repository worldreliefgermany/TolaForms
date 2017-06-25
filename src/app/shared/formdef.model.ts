import { Fielddef } from './fielddef.model';

export class Formdef {
    constructor(
        public name: string,
        public description: string,
        public isPublic: boolean,
        public fields: Fielddef[],
    ) {}
}
