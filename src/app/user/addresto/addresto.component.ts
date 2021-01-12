import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl  } from "@angular/forms";
import { RestoserviceService } from "../restoservice.service";
@Component({
  selector: 'app-addresto',
  templateUrl: './addresto.component.html',
  styleUrls: ['./addresto.component.css']
})
export class AddrestoComponent implements OnInit {
alert = false;
  addResto = new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    detail: new FormControl('')
  })
  constructor(private resto : RestoserviceService) { 
   
  }

  ngOnInit(): void {
  }
  collectResto()
  {
    this.resto.addRestoDetails(this.addResto.value).subscribe(data =>{
     console.warn("Resto added successfully");
     this.alert=true;
     this.addResto.reset();
    })
  }
}
