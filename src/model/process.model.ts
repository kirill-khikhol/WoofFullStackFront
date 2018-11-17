import { Position } from './position.model';
export class Process {
    constructor(
        public id: number,
        public position: Position,
        public status: string,
        public creationTime: number,
        public timeUnit:string,
        public technologiesExpectationFulfillmentAmount: number,
        public technologiesExpectationFulfillmentOf: number,
        public salaryExpectationFulfillment: boolean,
        public salary: number,
        public locationExpectationFulfillment: boolean,
        public location: string
    ) { }

}