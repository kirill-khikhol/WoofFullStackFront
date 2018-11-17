import { Process } from '../../model/process.model';
import { Component, OnInit } from '@angular/core';
import { ProcessesService } from 'src/services/processes.service';

@Component({
  selector: 'app-all-processes',
  templateUrl: './all-processes.component.html',
  styleUrls: ['./all-processes.component.css']
})
export class AllProcessesComponent implements OnInit {
  constructor(private processes:ProcessesService) { }


  ngOnInit() {
  }

}
