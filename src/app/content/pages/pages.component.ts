import { EventEmitter, Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';

EventEmitter
@Component({
  selector: 'm-pages',
  templateUrl: './pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit {
  footerTitle : string;
  constructor() { }

  ngOnInit() { }

}
