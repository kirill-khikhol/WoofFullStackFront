import { Process } from 'src/model/process.model';
export class Candidate {

    constructor(
        public name: string,
        public processes: Process[],
        public newCount: number,
        public acceptedCount: number,
        public rejectedCount: number,
    ) { }

}