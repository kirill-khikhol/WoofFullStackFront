import { Candidate } from '../model/candidate.model';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { ProcessesService } from './processes.service';
@Injectable()
export class CandidateServise {
    public name: string;
    public newCount: number;
    public acceptedCount: number;
    public rejectedCount: number;
    public allCount: number;
    constructor(private httpService: HttpService, private processes: ProcessesService) { }

    getCandidate() {
        this.httpService.getCandidate()
            .subscribe(candidate =>
                this.updateCandidate(candidate)
            );
    }

    acceptProcess(id: number) {
        this.httpService.acceptProcess(id)
            .subscribe(candidate =>
                this.updateCandidate(candidate)
            );
    }
    rejectProcess(id: number) {
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
}