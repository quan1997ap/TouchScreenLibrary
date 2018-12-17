import { Component, OnInit ,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit , OnChanges{

  @Input() statusSideBar: any; // {stateGlossaryZoneName : true , zoneId : ""};

  constructor() { }

  ngOnInit() {
   
  }
  
  ngOnChanges(){
   
  }

}
