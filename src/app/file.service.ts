import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { Http, ResponseContentType } from '@angular/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }
}
