import { ModalData } from './i-popup-option';
import { PogPopupService } from '../pog-popup.service';
import { HostBinding, OnInit } from '@angular/core';
import { POG_POPUP_TYPE } from './enums';
import { PopupStateCommand } from './a-popup-control-item';



export abstract class ABasePopupComponent  implements OnInit {

    @HostBinding('class') 
    public class:string ="empty";

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
    ngOnInit() {     
        
        this.modalData.control.subscribe((cmd:PopupStateCommand)=>{
            switch(cmd){
                case PopupStateCommand.CLOSE:
                this.pullData();
                this.modalData.control.unsubscribe();
                this.close();
                break;
            }
        });
        
        this.onInit_ext();        
    }
    public abstract onInit_ext();
    public abstract pullData();
}