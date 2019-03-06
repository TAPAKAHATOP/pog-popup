import { PopupStateCommand } from './a-popup-control-item';
import { ViewRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';



export class ModalData{

    component: any;
    option: any;
    command: PopupStateCommand;
    view: ViewRef;
    /**
     *
     */
    constructor(trg:any, opt:any, cmd:PopupStateCommand
    ) {
        this.component=trg;
        this.option=opt;
        this.command=cmd;
    }


    data:Observable<any>=new Observable<any>();
    control:BehaviorSubject<PopupStateCommand>=new BehaviorSubject<PopupStateCommand>(PopupStateCommand.NOTHING);
    public sendCommandToModal(cmd:PopupStateCommand){
        this.control.next(cmd);
    }
}