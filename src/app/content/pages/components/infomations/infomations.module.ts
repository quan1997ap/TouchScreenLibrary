import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfomationsComponent } from './infomations.component';
const routes: Routes = [
  {path: '', component: InfomationsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule
  ],
  exports: [],
  declarations: [
    InfomationsComponent,
  ],
})
export class InfomationsModule { }
