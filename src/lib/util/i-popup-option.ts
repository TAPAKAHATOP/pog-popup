import { PopupStateCommand } from './a-popup-control-item';
import { ViewRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PogPopupService } from '../pog-popup.service';
import { POG_POPUP_TYPE } from './enums';




export interface IPopupOption{
    
    class?:string;   
    type?:POG_POPUP_TYPE;
    message?:string;
    delay?:number;
    title?:string;
}

export class ModalData{
    popupService:PogPopupService;
    component: any;
    option: IPopupOption;
    command: PopupStateCommand;
    view: ViewRef;
    /**
     *
     */
    constructor(trg:any, opt:any, cmd:PopupStateCommand, service:PogPopupService) {
        this.component=trg;
        this.option=opt;
        this.command=cmd;
        this.popupService=service;
    }


    data:Subject<any>=new Subject<any>();
    control:BehaviorSubject<PopupStateCommand>=new BehaviorSubject<PopupStateCommand>(PopupStateCommand.NOTHING);
    public sendCommandToModal(cmd:PopupStateCommand){
        this.control.next(cmd);
    }
}