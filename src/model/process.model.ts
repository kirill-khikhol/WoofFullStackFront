import { Position } from './position.model';
export class Process {
    constructor(
        public id: number,
        public position: Position,
        // public title: string,
        // public techStack: string[],
        public status: string,
        public creationTime: string,
        public technologiesExpectationFulfillmentAmount: number,
        public technologiesExpectationFulfillmentOf: number,
        public salaryExpectationFulfillment: boolean,
        public salary: number,
        public locationExpectationFulfillment: boolean,
        public location: string
    ) { }

}