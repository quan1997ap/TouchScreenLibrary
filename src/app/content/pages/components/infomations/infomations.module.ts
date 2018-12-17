import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfomationsComponent } from './infomations.component';

const routes: Routes = [
  {path: '', component: InfomationsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [InfomationsComponent],
})
export class InfomationsModule { }
