import { NgModule } from '@angular/core';
import { PogPopupComponent } from './pog-popup.component';
import { NotifyItemComponent } from './comp/notify-item/notify-item.component';
import { PopupContainerComponent } from './comp/popup-container/popup-container.component';


@NgModule({
  declarations: [PogPopupComponent, NotifyItemComponent, PopupContainerComponent],
  imports: [
  ],
  exports: [PogPopupComponent],
  entryComponents:[
    NotifyItemComponent,
    PopupContainerComponent
  ]
})
export class PogPopupModule { }
