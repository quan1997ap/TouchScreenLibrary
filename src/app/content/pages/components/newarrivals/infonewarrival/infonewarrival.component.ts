import { Component, OnInit ,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-infonewarrival',
  templateUrl: './infonewarrival.component.html',
  styleUrls: ['./infonewarrival.component.css']
})

export class InfoNewArrivalComponent implements OnInit , OnChanges{

  @Input() infoBookDetail: any; // {stateGlossaryZoneName : true , zoneId : ""};

  constructor() { }

  ngOnInit() {
   
  }
  
  ngOnChanges(){
    console.log(this.infoBookDetail);
  } 

}
