import { Component, OnInit } from '@angular/core';
import { ProcessesService } from 'src/services/processes.service';

@Component({
  selector: 'app-new-processes',
  templateUrl: './new-processes.component.html',
  styleUrls: ['./new-processes.component.css']
})
export class NewProcessesComponent implements OnInit {

  constructor(private processes:ProcessesService) { }
  
  ngOnInit() {
  }

}
