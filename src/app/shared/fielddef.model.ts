export class Fielddef {
    constructor(
        public name: string,
        public label: string,
        public type: string,
        public required: boolean,
        public order: number
    ) {}
}
