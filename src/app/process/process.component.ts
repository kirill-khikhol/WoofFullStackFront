import { Process } from '../../model/process.model';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
@Input() process:Process;
@Output() changeStatus:EventEmitter<void>=new EventEmitter();

accseptStatus() {
  this.process.status = "Accsepted";
  this.changeStatus.emit();
  // this.process.allprocsesses.counNews();
}
rejectStatus() {
  this.process.status = "Rejected";
  this.changeStatus.emit();
  // this.process.allprocsesses.counNews();
}
}
