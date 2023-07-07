import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../shared/local-storage.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from '../../shared/config.service';
import { ExchangeService } from '../../shared/trans.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent implements OnInit {
  Config:any={}
  ListsExchange: any[] = []
  displayedColumns: string[] = ['Email', 'CreateAt'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _LocalStorageService:LocalStorageService,
    public _ConfigService: ConfigService,
    private _ExchangeService: ExchangeService,
  ) { }

  ngOnInit() {
    this._ConfigService.getAll().subscribe(data=>this.Config = data[0])
    this._ExchangeService.getAll().subscribe(data=>
      {
        this.ListsExchange = data
        this.ListsExchange.forEach(v => {
          v.Email = v.Email.replace(/(?<=.).(?=[^@]*?@)/g, "*");
        });
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

}
