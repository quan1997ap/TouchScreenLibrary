import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewArrivalsComponent } from './newarrivals.component';

const routes: Routes = [
  {path: '', component: NewArrivalsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [NewArrivalsComponent],
})
export class NewArrivalsModule { }
