import { CandidateServise } from './../../services/candidate.service';
import { Process } from '../../model/process.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  @Input() process: Process;
  constructor(private candidate: CandidateServise) { }

  accept() {
    this.candidate.acceptProcess(this.process.id);
  }
  reject() {
    this.candidate.rejectProcess(this.process.id);
  }

}
type myEvent = {
  id: number;
  status: string;
}