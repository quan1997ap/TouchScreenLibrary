import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from "@angular/common"
import {TranslateModule} from '@ngx-translate/core';
const routes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    CommonModule],
  exports: [],
  declarations: [DashboardComponent, SidebarComponent],
})
export class DashboardModule { }
