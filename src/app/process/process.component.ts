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
  @Output() changeStatus: EventEmitter<myEvent> = new EventEmitter();
  constructor(private candidate:CandidateServise) { }

  accept() {
    // this.process.status = "Accepted";
this.candidate.acceptProcess(this.process.id);

    // this.changeStatus.emit({id:this.process.id,status: 'ACCEPT'});
    // this.changeStatus.emit(this.process.id,status: 'ACCEPT');
    // this.process.allprocsesses.counNews();
  }
  reject() {
    this.candidate.rejectProcess(this.process.id);
    // this.process.status = "Rejected";
    // this.changeStatus.emit({id: this.process.id, status: 'REJECT'});
    // this.process.allprocsesses.counNews();
  }
  
}
type myEvent ={
    id:number;
    status:string;
  }