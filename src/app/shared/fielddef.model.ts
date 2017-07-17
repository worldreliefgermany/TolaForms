export class Fielddef {
    constructor(
        public id: number,
        public name: string,
        public label: string,
        public type: string,
        public required: boolean,
        public order: number,
        public options: string
    ) {}
}
