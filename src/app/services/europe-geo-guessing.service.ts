import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EuropeGeoGuessingService {

  constructor(private httpClient:HttpClient) { }

  GetEuropeGeoGuessing():Observable<any> {
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1234269435866243072');
  }
}
