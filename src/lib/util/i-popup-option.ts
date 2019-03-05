import { PopupStateCommand } from './a-popup-control-item';
import { ViewRef } from '@angular/core';



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
}