import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  currentZoneId: string;
  dataToSideBar: boolean = true;
  aqiData: any;

  // dataToSideBar has 3 property 
  // StateGlossaryZoneName : true <=> show ; false <=> hidden
  // StateGlossaryZoneColor : 1 <=> show GlossaryColor For Floor ; 2 <=> show show GlossaryColor For ZoneA ; 3 <=> hidden all
  // zoneId : curentZone

  dataChangeSideBar: any;

  constructor() { }
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

        Math.floor((Math.random() * 3) + 1);

        // const color = ['#52ffb1', '#d3ff2d', '#feca00', '#fc5600', '#fa1500', '#9f0000'];
        // 1 2 3 4 5 6 muc

        const color1 = ['#82ff80', '#11fff3', '#03bde2', '#027ec7', '#002ea1', '#000083'];
        let colorDetail = Math.floor((Math.random() * 6) + 0);
        iDiv.style.backgroundColor = color1[colorDetail];

        //iDiv.innerHTML = colorDetail;
        iDiv.style.opacity = '0.7';
        iDiv.style.cssFloat = 'left';
        coverheatmap.appendChild(iDiv);
      }
    }
  }

  activeDetailZone(_zoneId) {
    //show DetailZone when user click on map 3d
    document.getElementById('floor').style.opacity = ' 0.2 ';
    this.currentZoneId = _zoneId;
    let zondID1 = document.getElementById(this.currentZoneId);
    zondID1.classList.add('active-zone');

    console.log(_zoneId)
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

  loadDataDetailZone() {

  }

  back() {
    document.getElementById('floor').style.opacity = '1';
    let zondID2 = document.getElementById(this.currentZoneId);
    if (zondID2 != undefined) {
      zondID2.classList.remove('active-zone');
    }

    // sideBar back to floor 
    this.dataChangeSideBar = { stateGlossaryZoneName: true, zoneId: 'floor' };
  }

  showHeatMap() {
    let mapNomal = document.getElementById('map-3d');
    let heathmap = document.getElementById('heatmap-2d');
    if (mapNomal.style.display == 'none') {
      heathmap.style.display = 'none';
      mapNomal.style.display = 'flex';
    } else {
      heathmap.style.display = 'flex';
      mapNomal.style.display = 'none';

    }
  }

  onClick(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    if (document.getElementById('zone-a').contains(target)) {
      console.log('Clicked in box');
    } else {
      console.log('Clicked outside the box');
    }
  }


  // main event
  showAQI(){
    this.aqiData = 1;
  }
}
