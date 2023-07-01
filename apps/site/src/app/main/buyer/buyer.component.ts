import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  SellData:any={type:0,Trangthai:0}
  constructor() { }

  ngOnInit() {
  }

}
