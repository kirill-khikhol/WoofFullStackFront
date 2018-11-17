import { Component, OnInit } from '@angular/core';
import { Process } from 'src/model/process.model';
import { ProcessesService } from 'src/services/processes.service';
import { CandidateServise } from 'src/services/candidate.service';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css'],
  providers: [ProcessesService,CandidateServise]
})
export class ProcessesComponent implements OnInit {
  allProcesses: Process[] = [];
  newCount: number = 0;
  acceptedCount: number = 0;
  showCondition: string = "New";
  constructor(private processes: ProcessesService, private candidate:CandidateServise) { }

  counNews() {
    this.newCount = 0;
    this.acceptedCount = 0;
    this.allProcesses.forEach(e => {
      if (e.status == "New") {
        this.newCount++;
      } else if (e.status == "Accepted") {
        this.acceptedCount++;
      }
    });
  }

  ngOnInit() {
    this.candidate.getCandidate();
    // this.candidate.acceptProcess(20);
    // this.processes.getCandidate();
    console.log("newProcesses = " + this.processes.newProcesses.length);
  }

}
