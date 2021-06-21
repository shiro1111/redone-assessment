import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import dummyData from '../../shared/data/data.json'
@Injectable()
export class DashboardService {

    constructor(private http: HttpClient) { }

    getLov() : Observable<any>{
        return of(dummyData)
    }
    
}