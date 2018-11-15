import { AllProcessesComponent } from './../app/all-processes/all-processes.component';
export class Process {

    constructor(public id:number,
      public title: string,
      public techStack: string[],
      public status: string,
      public creationTime: string,
      public technologiesExpectationFulfillmentAmount:number,
      public technologiesExpectationFulfillmentOf: number,
      public salaryExpectationFulfillment: boolean,
      public salary: number,
      public locationExpectationFulfillment: boolean,
      public location: string, 
      public allprocsesses:AllProcessesComponent
      ) { }
  
    accseptStatus() {
      this.status = "Accsepted";
      this.allprocsesses.counNews();
    }
    rejectStatus() {
      this.status = "Rejected";
      this.allprocsesses.counNews();
    }
  }