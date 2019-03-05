import { NgModule } from '@angular/core';
import { PogPopupComponent } from './pog-popup.component';
import { NotifyItemComponent } from './comp/notify-item/notify-item.component';


@NgModule({
  declarations: [PogPopupComponent, NotifyItemComponent],
  imports: [
  ],
  exports: [PogPopupComponent],
  entryComponents:[
    NotifyItemComponent
  ]
})
export class PogPopupModule { }
