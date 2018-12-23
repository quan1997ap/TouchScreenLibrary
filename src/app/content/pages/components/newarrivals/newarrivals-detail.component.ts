import { Component, OnInit } from '@angular/core';
import { InfomationBookModel } from 'src/app/core/model/infomaitionbook.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
declare var Swiper: any;
declare var $:any;

@Component({
  selector: 'm-newarrivals-detail',
  templateUrl: './newarrivals-detail.component.html',
  styleUrls: ['./newarrivals-detail.component.scss']
})

export class NewArrivalsDetailComponent implements OnInit {
  
  subgetPram:Subscription;
  bookId:any;
  listbooks = [
    {id:1, detail: "day la cuon sach dau tien"},
    {id:2, detail: "day la cuon sach thu 2 "},
    {id:3, detail: "day la cuon sach thu 3 "},
    {id:4, detail: "day la cuon sach thu 4 "},
    {id:5, detail: "day la cuon sach thu 5 "},
    {id:6, detail: "day la cuon sach thu 6 "},
    {id:7, detail: "day la cuon sach thu 7 "},
  ];
  
  constructor(private route: ActivatedRoute) {
    this.subgetPram = this.route.params.subscribe(params => {
      this.bookId = +params['id'];
      console.log(this.bookId)
   });
  }

  ngOnInit() {
    
  }

  toPrePage() {

  }

}
