import { Component, OnInit } from '@angular/core';
import { CauhinhService } from '../../shared/cauhinh.service';

@Component({
  selector: 'app-ngonngu',
  templateUrl: './ngonngu.component.html',
  styleUrls: ['./ngonngu.component.css']
})
export class NgonnguComponent implements OnInit {
  Data:any={}
  constructor(
    private _CauhinhService:CauhinhService
  ) { }

  ngOnInit() {
    this._CauhinhService.getByslug('ngonngu').subscribe(data=>
      {
        console.log(data); 
        this.Data = data
      }
      )
  }

}
