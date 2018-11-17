import { HttpService } from './http.service';
import { Process } from "src/model/process.model";
import { Injectable } from '@angular/core';
@Injectable()
export class ProcessesService {
    newProcesses: Process[] = [];
    acceptedProcesses: Process[] = [];
    rejectedProcesses: Process[] = [];

    constructor(private httpService: HttpService) { }

    sortProcesses(processes: Process[]) {
        this.newProcesses = [];
        this.acceptedProcesses = [];
        this.rejectedProcesses = [];
        processes.forEach(p => {
            let date = new Date();
            p.creationTime=Math.round((date.valueOf()/1000-p.creationTime)/60);
            if(p.creationTime<2){
                p.timeUnit="minute";
            }else if(p.creationTime<60){
                p.timeUnit="minutes";
            }else if(p.creationTime<60*2){
                p.timeUnit="hour";
                p.creationTime= Math.round(p.creationTime/60);
            }else if(p.creationTime<60*24){
                p.timeUnit="hours";
                p.creationTime= Math.round(p.creationTime/60);
            }else if(p.creationTime<60*24*2){
                p.timeUnit="day";
                p.creationTime= Math.round(p.creationTime/60/24);
            }else{
                p.timeUnit="days";
                p.creationTime= Math.round(p.creationTime/60/24);
            }
            switch (p.status) {
                case "NEW": this.newProcesses.push(p); break;
                case "ACCEPTED": this.acceptedProcesses.push(p); break;
                case "REJECTED": this.rejectedProcesses.push(p); break;
            }
        });
    }
}