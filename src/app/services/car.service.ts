import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44390/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getcars" 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getbybrand?brandId="+brandId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getbycolor?colorId="+colorId 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   getCarsByDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"cars/getdetailbycarId?carId="+carId 

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
   
}
