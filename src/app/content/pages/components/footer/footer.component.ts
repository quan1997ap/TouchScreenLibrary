import { Component,Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageTitleService } from 'src/app/core/services/pagetitle.service';
import { Router,NavigationEnd, ActivatedRoute, Params, Data } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [PageTitleService]
})

export class FooterComponent implements OnInit ,OnDestroy{
  

  currentLocation: any;
  subscriptionChangeTitle:Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pageTitleService: PageTitleService
  ) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((_location: any) => {
      this.currentLocation = _location.url;
    })
  }
  
  ngOnInit() {
  }

  changeTitle(){
  }
  ngOnDestroy(){
    this.subscriptionChangeTitle.unsubscribe();
  }
}
