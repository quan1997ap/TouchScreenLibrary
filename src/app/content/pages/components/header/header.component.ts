import { TranslationService } from './../../../../core/services/translation.service';
import { Component, Input, OnInit, ChangeDetectorRef, AfterContentInit, OnDestroy, OnChanges } from '@angular/core';
import * as moment from 'moment';
import { PageTitleService } from 'src/app/core/services/pagetitle.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable, Subject, Subscription } from "rxjs";

// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate

@Component({
  selector: 'm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterContentInit, OnDestroy, OnChanges {
  currentTime: any;
  language: string;
  headerTitle: string = "";// title main to show
  headerTitleRouter: string = "";// title header follow router link
  headerTitleZone: string = "";// title header follow zoneID
  routerSubscription: Subscription;

  constructor(
    public cd: ChangeDetectorRef,
    private translationService: TranslationService,
    private route: ActivatedRoute,
    private router: Router,
    public titleService: PageTitleService,
  ) {

    // set title app
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/':
            this.headerTitleRouter = "MAP";
            this.headerTitle = this.headerTitleRouter;
            break;
          case '/newarrivals':
            this.headerTitleRouter = "BOOK";
            this.headerTitle = this.headerTitleRouter;
            break;
          case '/infomations':
            this.headerTitleRouter = "INFOMATION";
            this.headerTitle = this.headerTitleRouter;
            break;
        }
      }
    });
    this.titleService.subject.subscribe(headerTitle => {
      this.headerTitleZone = headerTitle;
      this.headerTitle =  this.headerTitleZone;
    })
  }

  ngOnChanges() {
  }

  ngOnInit() {
    // thời gian theo ngôn ngữ
    this.creatClockRealTime('vi');
    this.translationService.getSelectedLanguage().subscribe(lang => {
      this.language = lang;
      this.creatClockRealTime(this.language);
    })
  }

  ngAfterContentInit() {
    setInterval(() => {
      this.creatClockRealTime(this.language);
      this.cd.detectChanges();
    }, 5000);
  }


  creatClockRealTime(language: string) {
    moment.locale(language)
    const today = new Date();
    let day = moment(today).format('dddd');
    let month = moment(today).format('MMM DD');
    let clock = moment(today).format('HH:mm');
    this.currentTime = {
      day: day,
      month: month,
      clock: clock
    }
  }

  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
    this.language = lang;
    this.creatClockRealTime(this.language);
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
