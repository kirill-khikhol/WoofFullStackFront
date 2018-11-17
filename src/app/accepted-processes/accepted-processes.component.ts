import { Component, OnInit } from '@angular/core';
import { ProcessesService } from 'src/services/processes.service';

@Component({
  selector: 'app-accepted-processes',
  templateUrl: './accepted-processes.component.html',
  styleUrls: ['./accepted-processes.component.css']
})
export class AcceptedProcessesComponent implements OnInit {

  constructor(private processes:ProcessesService) { }

  ngOnInit() {
  }

}
