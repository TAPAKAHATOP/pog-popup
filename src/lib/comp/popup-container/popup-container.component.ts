import { Component, OnInit, ViewContainerRef, ViewChild, HostBinding } from '@angular/core';
import { ModalData } from '../../util/i-popup-option';
import { PogPopupService } from '../../pog-popup.service';
import { POG_POPUP_TYPE } from '../../util/enums';

@Component({
  selector: 'pog-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.css']
})
export class PopupContainerComponent implements OnInit {

  title:string="";
  modalData: ModalData = null;
  popupService: PogPopupService

  @HostBinding("class") 
  public class:string="empty";

  close() {
    this.popupService.closeModal(this.modalData.view);    
  }

  @ViewChild("embedded", { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor() { }

  ngOnInit() {
    this.modalData.option.class="";

    let view = this.popupService.prepareView(this.modalData, this.entry, POG_POPUP_TYPE.MODAL).hostView
    this.entry.insert(view);

  }

}
