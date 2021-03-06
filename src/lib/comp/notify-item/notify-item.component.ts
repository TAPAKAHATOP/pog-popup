import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ABasePopupComponent } from '../../util/a-base-popup-component';

@Component({
  selector: 'pog-notify-item',
  templateUrl: './notify-item.component.html',
  styleUrls: ['./notify-item.component.css']
})
export class NotifyItemComponent extends ABasePopupComponent implements OnInit {
  public pullData() {
    
  }

  public onInit_ext() {
    window.setTimeout(()=>{
      this.closeNotify();
    },this.delay);
  }

  @HostListener("click")
  closeByClick(){
    this.closeNotify();
  }

  constructor() {
    super();
  }

  @Input() message:string="";
  @Input() delay:number=1000;
  
}
