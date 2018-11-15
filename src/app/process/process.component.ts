import { Process } from './../../model/Process';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
@Input() process:Process;

}
