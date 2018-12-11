import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'm-pages',
  templateUrl: './pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
