import { Component, OnInit } from '@angular/core';
import { RestoserviceService } from "../restoservice.service";

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {
data : any = {}
  constructor(private resto : RestoserviceService) {
      this.resto.getRestoDetails().subscribe(data=>{
        this.data = data;
      })
   }

  ngOnInit(): void {
  }

}
