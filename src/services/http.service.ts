import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Candidate } from "src/model/candidate.model";
import { Observable } from "rxjs";
const BASE_URL = "http://localhost:8080";
// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json'
//     })
//   };



@Injectable()
export class HttpService {
    // params: HttpParams = new HttpParams().set('name', 'John 0');
    constructor(private http: HttpClient) { }

    getCandidate(): Observable<Candidate> {
        let params = new HttpParams().set('name', 'John 0');
        return this.http.get<Candidate>(BASE_URL + '/candidate', { params });
    }

    acceptProcess(id: number): Observable<Candidate> {
        console.log(id.toString());
        let params = new HttpParams().set('processId', id.toString());
        // let params = new HttpParams().set('name', 'John 0');
        return this.http.get<Candidate>(BASE_URL + '/process/accept', { params });
        // return this.http.get<Candidate>(BASE_URL + '/candidate/a',httpOptions);
    }
    // rejectProcess(id: number): Observable<Candidate> {
    //     let paramsB = new HttpParams().set('processId', id.toString());
    //     return this.http.get<Candidate>(BASE_URL + '/process/reject', { paramsB });
    // }
}