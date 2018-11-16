import { AllProcessesComponent } from '../app/all-processes/all-processes.component';
export class Process {

    constructor(public id: number,
        public title: string,
        public techStack: string[],
        public status: string,
        public creationTime: string,
        public technologiesExpectationFulfillmentAmount: number,
        public technologiesExpectationFulfillmentOf: number,
        public salaryExpectationFulfillment: boolean,
        public salary: number,
        public locationExpectationFulfillment: boolean,
        public location: string
    ) { }
    // getTitle(): string {
    //     return this.title;
    // }
}