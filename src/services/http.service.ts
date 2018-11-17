import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Candidate } from "src/model/candidate.model";
import { Observable } from "rxjs";
const BASE_URL = "http://localhost:8080";




@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    getCandidate(): Observable<Candidate> {
        let params = new HttpParams().set('name', 'John 0');
        return this.http.get<Candidate>(BASE_URL + '/candidate', { params });
    }

    acceptProcess(id: number): Observable<Candidate> {
        let params = new HttpParams().set('processId', id.toString());
        return this.http.post<Candidate>(BASE_URL + '/process/accept', null,{ params });
    }
    rejectProcess(id: number): Observable<Candidate> {
        let params = new HttpParams().set('processId', id.toString());
        return this.http.post<Candidate>(BASE_URL + '/process/reject', null,{ params });
    }
}