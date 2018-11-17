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

  constructor(private processes: ProcessesService, private candidate:CandidateServise) { }

  ngOnInit() {
    this.candidate.getCandidate();
  }

}
