import { PageTitleService } from './../../../../core/services/pagetitle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
declare var h337: any;

//fix error use html in svg(angular)
//http://embed.plnkr.co/EHPWvIN3UgXnkBv2884n/
//https://stackoverflow.com/questions/47566743/to-allow-any-element-add-no-errors-schema-to-the-ngmodule-schemas-of-this-c

@Component({
  selector: 'm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit , AfterViewInit {
  infoDetail: any[] = [];
  currentZoneId: string;
  dataToSideBar: boolean = true;
  aqiData: any;
  disableHeatmap = true;
  disableNoisemap = true;
  typeIndex: string;
  subscriptionChangeTitle: Subscription;


  // dataToSideBar has 3 property 
  // StateGlossaryZoneName : true <=> show ; false <=> hidden
  // StateGlossaryZoneColor : 1 <=> show GlossaryColor For Floor ; 2 <=> show show GlossaryColor For ZoneA ; 3 <=> hidden all
  // zoneId : curentZone

  dataChangeSideBar: any;

  constructor(
    public cd: ChangeDetectorRef,
    public titleService: PageTitleService,
  ) {
  }

  ngOnInit() {

    this.dataChangeSideBar = { stateGlossaryZoneName: true, zoneId: "floor" };

    //divide div to many square then draw heatmap
    let coverheatmap = document.getElementById('cover-heatmap-anhhoa');
    const maxRow = 4;
    const maxColumn = 4;
    const widthHeatmapUnit = (100 / maxRow) + '%';
    const heightHeatmapUnit = (100 / maxColumn) + '%';

    for (let i = 1; i <= maxRow; i++) {
      for (let j = 1; j <= maxColumn; j++) {
        let iDiv = document.createElement('div');
        iDiv.className = 'heatmap-unit';
        iDiv.style.width = widthHeatmapUnit;
        iDiv.style.height = heightHeatmapUnit;
        iDiv.style.opacity = '0.7';
        iDiv.style.cssFloat = 'left';
        Math.floor((Math.random() * 3) + 1);
        const color1 = ['#82ff80', '#11fff3', '#03bde2', '#027ec7', '#002ea1', '#000083'];
        // 1 2 3 4 5 6 muc
        let colorDetail = Math.floor((Math.random() * 6) + 0);
        iDiv.style.backgroundColor = color1[colorDetail];
        coverheatmap.appendChild(iDiv);
      }
    }

  }

  ngAfterViewInit(){
   setTimeout(() => {
    this.drawHeatmap();
   },5000)
    
  }

  activeDetailZone(_zoneId) {
    //show DetailZone when user click on map 3d
    document.getElementById('floor').style.opacity = ' 0.2 ';
    this.currentZoneId = _zoneId;
    let zondID1 = document.getElementById(this.currentZoneId);
    zondID1.classList.add('active-zone');

    this.titleService.subject.next(_zoneId);

    switch (_zoneId) {
      case 'floor':
        this.dataChangeSideBar = { stateGlossaryZoneName: true, zoneId: _zoneId };
        break;

      case 'zone-a':
        this.dataChangeSideBar = { stateGlossaryZoneName: false, zoneId: _zoneId };
        break;
      default:
        this.dataChangeSideBar = { stateGlossaryZoneName: false, zoneId: _zoneId };
        break;
    }

  }

  back() {
    document.getElementById('floor').style.opacity = '1';
    let zondID2 = document.getElementById(this.currentZoneId);
    if (zondID2 != undefined) {
      zondID2.classList.remove('active-zone');
    }
    this.showMap3d();
    // sideBar back to floor + changeTitle Header
    this.titleService.subject.next('MAP');
    this.dataChangeSideBar = { stateGlossaryZoneName: true, zoneId: 'floor' };


  }

  showHeatMap() {
    this.showMap2d();
    this.disableHeatmap = false;
    this.disableNoisemap = true;
  }

  drawHeatmap() {
    // ve heatmpa chia lm 100*100 o
    let coverheatmap = document.getElementById("cover-heatmap");
    let row = 100;
    let column = 100;
    let heightHeatMap, widthHeatMap;

    if (coverheatmap != undefined) {
      heightHeatMap = coverheatmap.offsetHeight;
      widthHeatMap = coverheatmap.offsetWidth;
    }
    let _radius = widthHeatMap / row;
    console.log(_radius)
    let dataPoints = [];
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.heatmap'),
      radius: _radius,
      maxOpacity: .9,
      minOpacity: 0,
      blur: 0.65,
      gradient: {
        // for gradient color customization
        '.5': '#0CF',
        '.8': '#CF3',
        // '.8': '#F96',
        '.95': '#ea6464'
      }
    });

    heatmapInstance.setDataMax(100);

    var dataPoint = {
      x: 10, // x coordinate of the datapoint, a number 
      y: 10, // y coordinate of the datapoint, a number
      value: 95 // the value at datapoint(x, y)
    };
    var dataPoint1 = {
      x: 90, // x coordinate of the datapoint, a number 
      y: 80, // y coordinate of the datapoint, a number
      value: 70 // the value at datapoint(x, y)
    };
    var dataPoint2 = {
      x: 85, // x coordinate of the datapoint, a number 
      y: 85, // y coordinate of the datapoint, a number
      value: 70 // the value at datapoint(x, y)
    };
    var dataPoint3 = {
      x: 50, // x coordinate of the datapoint, a number 
      y: 70, // y coordinate of the datapoint, a number
      value: 60 // the value at datapoint(x, y)
    };
    var dataPoint4 = {
      x: 50, // x coordinate of the datapoint, a number 
      y: 75, // y coordinate of the datapoint, a number
      value: 100 // the value at datapoint(x, y)
    };
    var dataPoint5 = {
      x: 60, // x coordinate of the datapoint, a number 
      y: 10, // y coordinate of the datapoint, a number
      value: 60 // the value at datapoint(x, y)
    };
    var dataPoint6 = {
      x: 70, // x coordinate of the datapoint, a number 
      y: 30, // y coordinate of the datapoint, a number
      value: 100 // the value at datapoint(x, y)
    };
    var dataPoint7 = {
      x: 80, // x coordinate of the datapoint, a number 
      y: 90, // y coordinate of the datapoint, a number
      value: 80 // the value at datapoint(x, y)
    };
    var dataPoint8 = {
      x: 90, // x coordinate of the datapoint, a number 
      y: 100, // y coordinate of the datapoint, a number
      value: 100 // the value at datapoint(x, y)
    };
    var dataPoint9 = {
      x: 0, // x coordinate of the datapoint, a number 
      y: 10, // y coordinate of the datapoint, a number
      value: 90 // the value at datapoint(x, y)
    };

    dataPoints = [dataPoint, dataPoint1, dataPoint2, dataPoint3, dataPoint4, dataPoint5, dataPoint6, dataPoint7, dataPoint8, dataPoint9];

    console.log(widthHeatMap + " -" + widthHeatMap / row);
    console.log(heightHeatMap + " -" + heightHeatMap / column);
    dataPoints.forEach(function (item, index) {
      console.log(item);
      item.x = (item.x) * (widthHeatMap / row);
      item.y = (item.y) * (heightHeatMap / column);
    })
    console.log(dataPoints);
    heatmapInstance.addData(dataPoints);
  };

  showNoiseMap() {
    this.infoDetail = [, , , , , ];
    this.disableNoisemap = false;
    this.disableHeatmap = true;
    this.showMap2d();
    setTimeout(() => {
      this.drawHeatmap();
    },500)
  }


  showMap2d() {
    // switch map 2d or 3d
    let map3d = document.getElementById('map-3d');
    let map2d = document.getElementById('map-2d');
    map3d.style.display = 'none';
    map2d.style.display = 'flex';
  }

  showMap3d() {
    // switch map 2d or 3d
    let map3d = document.getElementById('map-3d');
    let map2d = document.getElementById('map-2d');
    map3d.style.display = 'flex';
    map2d.style.display = 'none';
  }


  // hien thi thong tin chi tiet (chi so)
  showInfoDetail(typeIndex: string) {

    this.typeIndex = typeIndex;
    this.disableHeatmap = true;
    this.disableNoisemap = true;
    switch (typeIndex) {
      case 'AQI':
        this.disableHeatmap = true;
        this.infoDetail = [1, 2, 34, 44, 66, 33];
        break;
      case 'Noise':
        this.disableHeatmap = true;
        this.infoDetail = [6, 2, 34, 55, 66, 44];
        break;
      case 'Lumino':
        this.disableHeatmap = true;
        this.infoDetail = [9, 2, 34, 12, 66, 33];
        break;
      case 'Humidi':
        this.disableHeatmap = true;
        this.infoDetail = [7, 2, 19, 11, 55, 33];
        break;
      case 'Temp':
        this.disableHeatmap = true;
        this.infoDetail = [8, 2, 16, 44, 66, 66];
        break;
      default:
        console.log('Vùng chọn không xác định');
    }
    this.showMap2d();
  }
}
