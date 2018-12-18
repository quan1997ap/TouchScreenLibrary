import { Component, OnInit } from '@angular/core';
import { InfomationBookModel } from 'src/app/core/model/infomaitionbook.model';
declare var Swiper: any;

@Component({
  selector: 'm-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.scss']
})

export class NewArrivalsComponent implements OnInit {
  infomationBookDetail:InfomationBookModel;
  constructor() {
    this.infomationBookDetail = new InfomationBookModel();
  }
  ngOnInit() {

    //create swiper carousel book
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // send data => newarrivalComponent (pr -> child)
    this.infomationBookDetail.bookname="sach moi",
    this.infomationBookDetail.bookloction="11,22";
    
  }

  toPrePage(){

  }

}
