import { Injectable, ViewRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ModalData, IPopupOption } from './util/i-popup-option';
import { PopupStateCommand } from './util/a-popup-control-item';
import { BehaviorSubject } from 'rxjs';
import { NotifyItemComponent } from './comp/notify-item/notify-item.component';
import { POG_POPUP_TYPE } from './util/enums';
import { PopupContainerComponent } from './comp/popup-container/popup-container.component';

@Injectable({
  providedIn: 'root'
})
export class PogPopupService {

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  private popupClassName = "pogPopup";
  private notifyClassName = "pogNotify"
  private notifyDelay: number = 4000;


  public setNotifyItemClassName(name: string) {
    this.notifyClassName = name;
  }

  public setClosingDelay(del: number) {
    this.notifyDelay = del;
  }

  public setPopupClassName(name: string) {
    this.popupClassName = name;
  }

  public modalPipe: BehaviorSubject<ModalData> = new BehaviorSubject<ModalData>(null);
  public closePipe: BehaviorSubject<ViewRef> = new BehaviorSubject<ViewRef>(null);

  public showModal(target: any, option?: IPopupOption, cmd?: PopupStateCommand): ModalData {
    if(!option.class){
      option.class = this.popupClassName;
    }
    if (!option.type) {
      option.type = POG_POPUP_TYPE.MODAL;
    }

    let mData = new ModalData(target, option, cmd, this);

    this.modalPipe.next(mData);
    return mData;
  }

  public closeModal(view: ViewRef): any {
    this.closePipe.next(view);
  }

  public prepareView(modalData: ModalData, viewContainer: ViewContainerRef,type?:POG_POPUP_TYPE) {

    if(!type){
      type=modalData.option.type;
    }
    let factory = null;
    switch (type) {
      case POG_POPUP_TYPE.EMBEDDED_MODAL:
        factory = this.resolver.resolveComponentFactory(PopupContainerComponent);
        break;
      default:
        factory = this.resolver.resolveComponentFactory(modalData.component);
        break;
    }

    let componentRef = factory.create(viewContainer.parentInjector);

    //option
    for (let key in modalData.option) {
      componentRef.instance[key] = modalData.option[key];
    }


    //modalData handler
    componentRef.instance["modalData"] = modalData;
    componentRef.instance["popupService"] = modalData.popupService;

    return componentRef;
  }

  public showNotify(msg: string, className?: string, delay?: number): any {

    let option: IPopupOption = {
      class: this.notifyClassName,
      type: POG_POPUP_TYPE.NOTIFY,
      message: msg,
      delay: this.notifyDelay
    };
    if (className) {
      option.class = className;
    }
    if (delay && delay > 0) {
      option.delay = delay;
    }
    let mData = new ModalData(NotifyItemComponent, option, PopupStateCommand.SHOW, this);
    this.modalPipe.next(mData);
  }
}
