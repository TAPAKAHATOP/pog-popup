import { ModalData } from './i-popup-option';
import { PogPopupService } from '../pog-popup.service';
import { HostBinding } from '@angular/core';
import { POG_POPUP_TYPE } from './enums';



export abstract class ABasePopupComponent{

    @HostBinding('class') 
    protected class:string ="empty";


    protected type:POG_POPUP_TYPE=POG_POPUP_TYPE.MODAL;
    protected modalData:ModalData; 
    protected popupService:PogPopupService;  

    /**
     *
     */
    constructor() {}

    protected close(){
        if(this.popupService){
            this.popupService.closeModal(this.modalData.view);
        }
    }
}