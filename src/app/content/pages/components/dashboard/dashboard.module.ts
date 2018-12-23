import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from "@angular/common"
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    CommonModule],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [DashboardComponent, SidebarComponent],
})
export class DashboardModule { }
