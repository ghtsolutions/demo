import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/local-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ConfigService } from '../../shared/config.service';
import { ExchangeService } from '../../shared/trans.service';
import { generateOrderId } from '../../shared/shared.utils';
import { TelegramService } from '../../shared/telegram.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  SellData: any = {
    QuantityIn: '',
    QuantityOut: '',
    // CompanyAccount1: string,
    // CompanyAccount2: string,
     CustomAccount1: '',
     CustomAccount2: '',
    // Content: string,
    Email:'',
    Fee: '',
    TransIdBank:'',
    // Note: string,
    Type: 2,
    Status: 0
  }
  Config:any={}
  Trans:any[]=[]
  constructor(
    private _LocalStorageService:LocalStorageService,
    private _snackBar: MatSnackBar,
    private _ExchangeService: ExchangeService,
    private _ConfigService: ConfigService,
    private _NotifierService: NotifierService,
    private _TelegramService: TelegramService,
    private router: Router
  ) { 
 
  }
  openSnackBar(message: string,action: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }
  ngOnInit() {
    this._ConfigService.getAll().subscribe(data => {
      this.Config = data[0]
      console.log(this.Config);
      this.SellData.Fee = this.Config.SellFee
    })
  }
  CreateSell(dulieu:any)
  {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (dulieu.QuantityIn=='')
    {
      this._NotifierService.notify("error", "Vui lòng nhập Số Lượng")
    }
    else if (dulieu.CustomAccount2=='')
    {
      this._NotifierService.notify("error", "Vui lòng nhập Địa Chỉ Ví")
    }
    else if (dulieu.Email=='')
    {
      this._NotifierService.notify("error", "Vui lòng nhập Email")
    }
    else if (!emailPattern.test(dulieu.Email)) {
      this._NotifierService.notify("error", "Sai Định Dạng Email")
    }
    else if (dulieu.CustomAccount1=='')
    {
      this._NotifierService.notify("error", "Vui lòng nhập Địa Chỉ Ví")
    }
    else if (dulieu.TransIdBank=='')
    {
      this._NotifierService.notify("error", "Vui lòng nhập Mã Trans ID")
    }
    else
    {
    dulieu.Code = generateOrderId(11);
    this._ExchangeService.createExchange(dulieu).subscribe(data => 
      {
        const result = `Có 1 giao dịch BÁN mới Mã đơn hàng ${data.Code}`
        this._TelegramService.createTelegram(result).subscribe();
        this._NotifierService.notify("success", "Create Success")
          this.router.navigate(['transfer',data.id]);
        }
      )
    } 
  }
  OnChange()
  {   
    this.SellData.QuantityOut = (this.SellData.QuantityIn *this.Config.Sellprice*(1 - (this.SellData.Fee / 100))).toFixed();
  }

}
