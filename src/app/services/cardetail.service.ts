import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44390/api/";
  constructor(private httpClient:HttpClient) { }

  getCarByImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbycarimages?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }

   getImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getlist"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
   


}
