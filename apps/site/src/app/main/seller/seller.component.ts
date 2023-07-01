import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  SellData:any={type:1,Trangthai:0}
  constructor() { }

  ngOnInit() {
  }

}
