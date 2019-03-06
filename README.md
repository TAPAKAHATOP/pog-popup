# PogPopup

Library wit toast and popup finctionality.

## Usage

#### Prepare

After package install

~~~TS
import { PogPopupModule } from 'pog-popup';

@NgModule({
    ...
    imports: [
        ...
        PogPopupModule
        ...
    ]
    ...
});
~~~

Also add components that you will use as modal
~~~TS
import { PogPopupModule } from 'pog-popup';

@NgModule({
    ...
    entryComponents:[
        TestModalComponent
    ]
    ...
});
~~~

#### Action

~~~TS
import { TestModalComponent } from "./test-modal-component.ts";
import { PogPopupService } from 'pog-popup';

export class SampleClassOrComponent{

    constructor(
        private popupService:PogPopupService
    ){}

    public toastSample(){
        this.modalService.showNotify("Alert message", "popup-alert",10000);
    }

    private fromModalData:any=null;

    public modalSample(){
        let modalData=this.modalService.showModal(
            TestModalComponent,
            {}, //options for component
            PopupStateCommand.SHOW);
        modalData.data.subscribe(data=>{
            this.fromModalData=data;
            modalData.sendCommandToModal(PopupStateCommand.CLOSE);
        });
    }
}
~~~