import { PopupStateCommand } from './a-popup-control-item';
import { ViewRef } from '@angular/core';

export interface IPopupOption{
    
}

export class ModalData{

    component: any;
    option: IPopupOption;
    command: PopupStateCommand;
    view: ViewRef;
    /**
     *
     */
    constructor(trg:any, opt:IPopupOption, cmd:PopupStateCommand
    ) {
        this.component=trg;
        this.option=opt;
        this.command=cmd;
    }
}