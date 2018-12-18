import { TranslationService } from './../../../../core/services/translation.service';
import { Component, OnInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate

@Component({
  selector: 'm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterContentInit {
  currentTime: any;
  language:string;
  constructor(
    public cd: ChangeDetectorRef,
    private translationService: TranslationService,
  ) {
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
  
}
