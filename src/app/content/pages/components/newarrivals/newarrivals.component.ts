import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InfomationBookModel } from 'src/app/core/model/infomaitionbook.model';
declare var Swiper: any;
declare var $: any;
@Component({
  selector: 'm-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.scss']
})

export class NewArrivalsComponent implements OnInit, AfterViewInit {
  infomationBookDetail: InfomationBookModel;
  listbooks = [
    { id: 1, detail: "day la cuon sach dau tien" },
    { id: 2, detail: "day la cuon sach thu 2 " },
    { id: 3, detail: "day la cuon sach thu 3 " },
    { id: 4, detail: "day la cuon sach thu 4 " },
    { id: 5, detail: "day la cuon sach thu 5 " },
    { id: 6, detail: "day la cuon sach thu 6 " },
    { id: 7, detail: "day la cuon sach thu 7 " },
  ];

  constructor() {
    this.infomationBookDetail = new InfomationBookModel();
  }
  ngOnInit() {

    
  }

  ngAfterViewInit() {
    //create swiper carousel book
    let widthCarousel = document.getElementById('carousel-book').offsetWidth;
    if (widthCarousel < 800) {
      this.createCarousel(2);
    }
    else if (widthCarousel > 800) {
      this.createCarousel(5);
    }
  }

  createCarousel(slidesPerView: number) {
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
  }
  toPrePage() {

  }

}
