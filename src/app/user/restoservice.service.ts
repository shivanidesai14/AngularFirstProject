import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {

  constructor(private http : HttpClient) { }
  getRestoDetails()
  {
      let url= "http://localhost:3000/restaurants/";
       return this.http.get(url);
  }
}
