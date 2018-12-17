import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import {TranslateModule} from '@ngx-translate/core';
@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    TranslateModule
  ],
  providers: [],
})
export class PagesModule { }
