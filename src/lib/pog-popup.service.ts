import { Injectable, ViewRef } from '@angular/core';
import { ModalData } from './util/i-popup-option';
import { IPopupControlItem, ControlItem, PopupStateCommand } from './util/a-popup-control-item';
import { BehaviorSubject } from 'rxjs';
import { NotifyItemComponent } from './comp/notify-item/notify-item.component';
import { POG_POPUP_TYPE } from './util/enums';

@Injectable({
  providedIn: 'root'
})
export class PogPopupService {

  /**
   *
   */
  constructor(
  ) {}

  private popupClassName="pogPopup";
  private notifyClassName="pogNotify"
  private notifyDelay:number=4000;

  public modalPipe: BehaviorSubject<ModalData> = new BehaviorSubject<ModalData>(null);
  public closePipe: BehaviorSubject<ViewRef> = new BehaviorSubject<ViewRef>(null);

  showModal(target: any, option?: any, cmd?: PopupStateCommand): IPopupControlItem {
    option.class=this.popupClassName;
    option.type=POG_POPUP_TYPE.NOTIFY;
    option.popupService=this;

    let mData = new ModalData(target, option, cmd);
    let ctrItem = new ControlItem();
    this.modalPipe.next(mData);
    return ctrItem;
  }
  closeModal(view:ViewRef): any {
    this.closePipe.next(view);
  }

  showNotify(msg: string): any {
    
    let option:any={
      class:this.notifyClassName,
      popupService:this,
      type:POG_POPUP_TYPE.NOTIFY,
      message:msg,
      delay:this.notifyDelay
    };
    let mData=new ModalData(NotifyItemComponent, option, PopupStateCommand.SHOW);
    this.modalPipe.next(mData);
  }
}
