import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const baseUrl="http://localhost:8080/brands"

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) {

   }
   saveBrand(brand: any){
      return  this.http.post(baseUrl, brand);
   }
   getBrands(){
    return this.http.get<any>(baseUrl);
   }

}
