# PogPopup

Library with toast and popup functionality.

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

##### Notify
Import `PogPopupService` to component and use it for displaying toast messages

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
}

~~~
[Live example](https://stackblitz.com/edit/pop-popup?embed=1&file=src/app/toast.component.ts)


##### Modal
Import `PogPopupService` to component and use it for displaying your

~~~TS
export class SampleClassOrComponent{

    constructor(
        private popupService:PogPopupService
    ){}

    public modalSample(){
        this.modalService.
    }

    private fromModalData:any=null;
}

let options:IPogPopupOption
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
[Live example](https://stackblitz.com/edit/pop-popup?embed=1&file=src/app/modal.component.ts)