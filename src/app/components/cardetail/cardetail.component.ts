import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  currentImage:CarImage;
  carImages:CarImage[]=[];
  cars:Car[]=[];
  constructor(private cardetailservice:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private carService: CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
       this.getCarByImages(params["carId"]) 
        this.getCarsByDetail(params["carId"])
      }
      
    })
  }
  

  getCarByImages(carId:number){
    this.cardetailservice.getCarByImages(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarsByDetail(carId:number){
    this.carService.getCarsByDetail(carId).subscribe(response=>{
      this.cars = response.data
    })
  }
  
}

