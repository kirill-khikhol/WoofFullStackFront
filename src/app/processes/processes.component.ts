import { Component, OnInit } from '@angular/core';
import { Process } from 'src/model/process.model';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {
  allProcesses: Process[] = [];
  newCount: number = 0;
  accseptedCount: number = 0;
  showCondition:string ="New";
  constructor() { }

  counNews() {
    this.newCount=0;
    this.accseptedCount=0;
    this.allProcesses.forEach(e => {
      if (e.status == "New") {
        this.newCount++;
      }else if(e.status == "Accsepted"){
        this.accseptedCount++;
      }
    });
  }

  ngOnInit() {
    this.allProcesses.push(new Process(0, "Java Expert",
      ["java", "Git", "Web", "ruby"],
      "New", "11.15", 2, 3, true, 16000, false, "Tel Aviv"));
    this.allProcesses.push(new Process(1, "Java Expert1",
      ["java", "Web", "ruby"],
      "New", "11.15", 3, 7, true, 17000, false, "Tel Aviv"));
    this.allProcesses.push(new Process(2, "Java Expert2",
      ["java", "Git", "Web", "ruby", "hibernate"],
      "New", "11.15", 2, 4, true, 19000, false, "Tel Aviv"));
    this.allProcesses.push(new Process(3, "Java Expert3",
      ["java", "Git", "REST", "WEB", "typeScript"],
      "New", "11.15", 4, 6, true, 125000, false, "Tel Aviv"));
    console.log(this.allProcesses.length);
    this.counNews();
  }

}