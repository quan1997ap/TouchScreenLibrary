import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArrivalsComponent } from './newarrivals.component';
import { NewArrivalsDetailComponent } from './newarrivals-detail.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewArrivalsComponent
      },
      {
        path: 'detail',
        children: [
          {
            path: ':id',
            component: NewArrivalsDetailComponent
          },
          {
            path: '',
            redirectTo: '/newarrivals',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ],
  exports: [],
  declarations: [
    NewArrivalsComponent,
    NewArrivalsDetailComponent
  ],
})
export class NewArrivalsModule { }
