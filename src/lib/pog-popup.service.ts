import { Injectable, ViewRef } from '@angular/core';
import { ModalData } from './util/i-popup-option';
import { PopupStateCommand } from './util/a-popup-control-item';
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


  public setNotifyItemClassName(name:string){
    this.notifyClassName=name;
  }

  public setClosingDelay(del:number){
    this.notifyDelay=del;
  }

  public setPopupClassName(name:string){
    this.popupClassName=name;
  }

  public modalPipe: BehaviorSubject<ModalData> = new BehaviorSubject<ModalData>(null);
  public closePipe: BehaviorSubject<ViewRef> = new BehaviorSubject<ViewRef>(null);

  public showModal(target: any, option?: any, cmd?: PopupStateCommand): ModalData {
    option.class=this.popupClassName;
    option.type=POG_POPUP_TYPE.NOTIFY;
    option.popupService=this;

    let mData = new ModalData(target, option, cmd);

    this.modalPipe.next(mData);
    return mData;
  }

  public closeModal(view:ViewRef): any {
    this.closePipe.next(view);
  }

  public showNotify(msg: string, className?:string): any {
    
    let option:any={
      class:this.notifyClassName,
      popupService:this,
      type:POG_POPUP_TYPE.NOTIFY,
      message:msg,
      delay:this.notifyDelay
    };
    if(className){
      option.class=className;
    }
    let mData=new ModalData(NotifyItemComponent, option, PopupStateCommand.SHOW);
    this.modalPipe.next(mData);
  }
}
