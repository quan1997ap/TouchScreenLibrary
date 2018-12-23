import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PageTitleService {
   public subject: Subject<string> = new Subject<string>();
}