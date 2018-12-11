import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [PagesRoutingModule],
  exports: [],
  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
})
export class PagesModule { }
