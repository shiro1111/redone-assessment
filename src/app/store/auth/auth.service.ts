import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AUTH } from 'src/app/shared/interface/auth';
import dummyData from '../../shared/data/data.json'


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    login(payload: AUTH.LOGIN_PAYLOAD) : Observable<any>{
        return of(dummyData);
    }
}