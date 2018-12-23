import { PageTitleService } from './../../../../core/services/pagetitle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-infomations',
  templateUrl: './infomations.component.html',
  styleUrls: ['./infomations.component.scss'],
  providers:[PageTitleService]
})

export class InfomationsComponent implements OnInit {
  constructor(
    public  pageTitleService : PageTitleService
  ) { }
  ngOnInit() {
  
  }
  
}
