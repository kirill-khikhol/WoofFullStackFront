import { HttpService } from './service/http.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProcessComponent } from './process/process.component';
import { AllProcessesComponent } from './all-processes/all-processes.component';
import { HomeComponent } from './home/home.component';
import { ProcessesComponent } from './processes/processes.component';
import { NewProcessesComponent } from './new-processes/new-processes.component';
import { AccseptedProcessesComponent } from './accsepted-processes/accsepted-processes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRouters: Routes = [
  { path: "", component: HomeComponent },
  { path: "processes", component: ProcessesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProcessComponent,
    AllProcessesComponent,
    HomeComponent,
    ProcessesComponent,
    NewProcessesComponent,
    AccseptedProcessesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters),
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
