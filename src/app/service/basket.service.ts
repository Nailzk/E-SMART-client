import { Injectable } from '@angular/core';
import { ActionsEnum } from '@app/enum';
import { Subject } from 'rxjs';

export interface IBasketAction {
    id: number;
    action: ActionsEnum;
}

@Injectable({ providedIn: 'root' })
export class BasketService {
  private _basketChanges$ = new Subject<IBasketAction>();

  public get basketChanges(): Subject<IBasketAction> {
    return this._basketChanges$;
  }

  public triggerChanges(item: IBasketAction): void {
    this._basketChanges$.next(item);
  }
}
