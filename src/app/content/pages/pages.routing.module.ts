import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ErrorPageComponent } from './snippets/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
				path: '',
				loadChildren: './components/dashboard/dashboard.module#DashboardModule'
      },
      {
				path: 'newarrivals',
        loadChildren: './components/newarrivals/newarrivals.module#NewArrivalsModule'
      },
      {
				path: 'infomations',
        loadChildren: './components/infomations/infomations.module#InfomationsModule'
      },
      {
        path: '404',
        component: ErrorPageComponent
      },
      {
        path: 'error/:type',
        component: ErrorPageComponent
      },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
