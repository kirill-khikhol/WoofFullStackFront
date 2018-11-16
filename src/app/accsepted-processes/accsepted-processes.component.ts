import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accsepted-processes',
  templateUrl: './accsepted-processes.component.html',
  styleUrls: ['./accsepted-processes.component.css']
})
export class AccseptedProcessesComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  hello() {
    this.httpService.hello();
  }
  getCandidate() {
    this.httpService.getCandidate();
  }
  ngOnInit() {
    this.getCandidate();
  }

}
