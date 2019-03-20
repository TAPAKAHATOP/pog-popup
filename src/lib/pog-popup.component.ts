import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewEncapsulation, HostBinding } from '@angular/core';
import { PogPopupService } from './pog-popup.service';
import { ModalData } from './util/i-popup-option';

@Component({
  selector: 'pog-popup',
  templateUrl: './pog-popup.component.html',
  styleUrls: ['./pog-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PogPopupComponent implements OnInit {

  @HostBinding("class") hostClass = "pogPopupPanel";
  constructor(
    private service: PogPopupService,
    //private resolver: ComponentFactoryResolver
  ) { }

  @ViewChild("modalPanel", { read: ViewContainerRef }) entry: ViewContainerRef;

  popupLayoutClassName:string="pogPopupLayout";
  showlayout:boolean=false;

  ngOnInit() {
    this.service.closePipe.subscribe(view => {
      if (view) {
        let q = this.entry.indexOf(view);
        this.entry.remove(this.entry.indexOf(view));
      }
    });
    this.service.modalPipe.subscribe((modalData: ModalData) => {
      if (modalData) {
        this.showlayout=modalData.option.showPopupLayout;
        modalData.view = this.service.prepareView(modalData, this.entry).hostView;
        this.entry.insert(modalData.view);
      }
    });
    this.service.modalCnt.subscribe((cnt:number)=>{
      this.showlayout=cnt>0;
    });
  }

}
