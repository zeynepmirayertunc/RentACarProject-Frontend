import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44390/api/rentals/getrentals";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
   return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
