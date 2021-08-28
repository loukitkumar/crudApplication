import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _detailsource=new Subject<Post>();
  detailsource$ = this._detailsource.asObservable();

  constructor() { }

  sendDetail(detail : Post)
  {
    this._detailsource.next(detail);
  }
}
