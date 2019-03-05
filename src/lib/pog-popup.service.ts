import { Injectable, ViewRef } from '@angular/core';
import { IPopupOption, ModalData } from './util/i-popup-option';
import { IPopupControlItem, ControlItem, PopupStateCommand } from './util/a-popup-control-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PogPopupService {

  /**
   *
   */
  constructor(
  ) {
  }

  public modalPipe: BehaviorSubject<ModalData> = new BehaviorSubject<ModalData>(null);
  public closePipe: BehaviorSubject<ViewRef> = new BehaviorSubject<ViewRef>(null);

  showModal(target: any, option?: IPopupOption, cmd?: PopupStateCommand): IPopupControlItem {
    let mData = new ModalData(target, option, cmd);
    let ctrItem = new ControlItem();
    this.modalPipe.next(mData);
    return ctrItem;
  }
  closeModal(view:ViewRef): any {
    this.closePipe.next(view);
  }

  showNotify(alias: string, msg: string): any {
    throw new Error("Method not implemented.");
  }
}
