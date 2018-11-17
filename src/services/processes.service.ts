import { HttpService } from './http.service';
import { Process } from "src/model/process.model";
import { Injectable } from '@angular/core';
@Injectable()
export class ProcessesService {
    newProcesses: Process[] = [];
    acceptedProcesses: Process[] = [];
    rejectedProcesses: Process[] = [];
    totalAmount: number;

    constructor(private httpService: HttpService) { }

    sortProcesses(processes: Process[]) {
        this.newProcesses = [];
        this.acceptedProcesses = [];
        this.rejectedProcesses = [];
        processes.forEach(p => {
            switch (p.status) {
                case "NEW": this.newProcesses.push(p); break;
                case "ACCEPTED": this.acceptedProcesses.push(p); break;
                case "REJECTED": this.rejectedProcesses.push(p); break;
            }
        });
    }
    getCandidate() {
        this.httpService.getCandidate()
            .subscribe(candidate => this.sortProcesses(candidate.processes));
    }

    changeStatus(e: myEvent) {
        // this.candidate.changeStatus(e);
        console.log("prosessService id: " + e.id + " status: " + e.status);

    }
}
type myEvent = {
    id: number;
    status: string;
}