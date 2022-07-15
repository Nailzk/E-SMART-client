import { Injectable } from '@angular/core';
import { IComment } from 'communication';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private _commentChanges$ = new Subject<IComment>()

  public get commentChanges(): Subject<IComment> {
    return this._commentChanges$;
  }

  public triggerChanges(comment: IComment): void {
    this._commentChanges$.next(comment);
  }
}
