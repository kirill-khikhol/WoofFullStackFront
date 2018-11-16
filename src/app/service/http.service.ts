import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
const BASE_URL = "http://localhost:8080";
const params= new HttpParams().set('name', 'John 0');
@Injectable()
export class HttpService {
    params: HttpParams = new HttpParams().set('name', 'John 0');
    constructor(private http: HttpClient) { }
    getCandidate(): void {
        this.http.get(BASE_URL + '/candidate', { params }).subscribe((response: Response) => { console.log(response) });
    }
    hello(): void {
        this.http.get(BASE_URL).subscribe((response: Response) => { console.log(response) });
    }
}