import { Candidate } from '../model/candidate.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { ProcessesService } from './processes.service';
@Injectable()
export class CandidateServise {
    public name: string;
    // public processes: Process[],
    public newCount: number;
    public acceptedCount: number;
    public rejectedCount: number;
    public allCount:number;
    // candidate: Candidate;
    constructor(private httpService: HttpService, private processes: ProcessesService) { }

    getCandidate() {
        console.log("I whant to get Candidate ");
        this.httpService.getCandidate()
            .subscribe(candidate =>
                this.updateCandidate(candidate)
            );
    }

    acceptProcess(id: number) {
        console.log("I whant to accept id: " + id);
        this.httpService.acceptProcess(id)
            .subscribe(candidate =>
                this.updateCandidate(candidate)
            );
    }
    rejectProcess(id: number) {
        console.log("I whant to reject id: " + id);
        this.httpService.rejectProcess(id)
            .subscribe(candidate =>
                this.updateCandidate(candidate)
            );
    }
    updateCandidate(candidate: Candidate) {
        this.processes.sortProcesses(candidate.processes);
        this.newCount = candidate.newCount;
        this.acceptedCount = candidate.acceptedCount;
        this.rejectedCount = candidate.rejectedCount;
        this.name = candidate.name;
        this.allCount=candidate.newCount+candidate.acceptedCount+candidate.rejectedCount;
    }

    someLog() {
        console.log("newCount: " + this.newCount);
        console.log("acceptedCount: " + this.acceptedCount);
        console.log("rejectedCount: " + this.rejectedCount);
    }
}
type myEvent = {
    id: number;
    status: string;
}