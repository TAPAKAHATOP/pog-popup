import { ModalData } from './i-popup-option';
import { PogPopupService } from '../pog-popup.service';
import { HostBinding } from '@angular/core';



export abstract class ABasePopupComponent{

    @HostBinding('class') classes = 'pogPopup';

    protected modalData:ModalData;   

    /**
     *
     */
    constructor(protected popupService:PogPopupService) {       
        
    }

    protected close(){
        this.popupService.closeModal(this.modalData.view);
    }
}