import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit, OnChanges, OnDestroy {

  @Input() statusSideBar: any; // {stateGlossaryZoneName : true , zoneId : ""};
  weatherApiKey = "1c8e58d766315d99dfe7006f30ec564f";
  stringGetDataWeatherApiKey = `https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=${this.weatherApiKey}`;
  subscriptionWeatherService: Subscription;


  listData:any[]; 
  constructor(
    public httpClient: HttpClient,
  ) {

  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.statusSideBar);
    if (this.subscriptionWeatherService != undefined) {
      this.subscriptionWeatherService.unsubscribe();
    }
    else {
      switch (this.statusSideBar.zoneId) {

        case "zone-a":
          break;
        case "zone-b":
          break;
        case "zone-c":
          this.getDataWeather();
          break;
        case "zone-d":
          break;
        case "zone-e":
          this.getDataWeather();
          break;
      }
    }
  }

  getDataWeather() {
    this.subscriptionWeatherService = this.httpClient.get(this.stringGetDataWeatherApiKey).subscribe(data => {
      let _data= JSON.parse(JSON.stringify(data));
      console.log(data)
      this.listData = _data.list;
      console.log(this.listData);
    });
  }


  ngOnDestroy() {
    if (this.subscriptionWeatherService != undefined) {
      this.subscriptionWeatherService.unsubscribe();
    }
  }
}
