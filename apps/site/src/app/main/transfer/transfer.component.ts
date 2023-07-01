import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  Data:any = {}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}
  ngOnInit() {   
    this.route.queryParams.subscribe((params:any) => {
      if(!params.Soluong){
        this.router.navigate(['/']);
      }
      else
      {
        this.Data = params
      }
    });
  }

}
