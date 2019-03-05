import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ABasePopupComponent } from '../../util/a-base-popup-component';

@Component({
  selector: 'pog-notify-item',
  templateUrl: './notify-item.component.html',
  styleUrls: ['./notify-item.component.css']
})
export class NotifyItemComponent extends ABasePopupComponent implements OnInit {

  @HostListener("click")
  closeByClick(){
    this.close();
  }

  constructor() {
    super();
  }

  @Input() message:string="";
  @Input() delay:number=1000;
  

  ngOnInit() {
    window.setTimeout(()=>{
      this.close();
    },this.delay);
  }

}
