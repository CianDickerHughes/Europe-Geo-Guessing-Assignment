import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EuropeGeoGuessingService {

  constructor(private httpClient:HttpClient) { }

  getEuropeGeoData():Observable<any> {
    return this.httpClient.get<any>('https://www.jsonblob.com/api/1234991585229135872');
  }

}
