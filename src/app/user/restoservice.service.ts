import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {
 
  constructor(private http : HttpClient) { }
  url= "http://localhost:3000/restaurants/";
  getRestoDetails()
  {
      
       return this.http.get(this.url);
  }
  addRestoDetails(data : any)
  {
    return this.http.post(this.url,data);
  }
}
