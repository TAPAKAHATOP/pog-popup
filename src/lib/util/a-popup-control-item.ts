import { Observable, BehaviorSubject } from 'rxjs';

export enum PopupStateCommand{
    CLOSE=0,
    SHOW=1,
}
export interface IPopupControlItem{
    data:Observable<any>;
    controlPipe:BehaviorSubject<number>;
}

export class APopupControlItem implements IPopupControlItem{
    public controlPipe: BehaviorSubject<number>=new BehaviorSubject<number>(PopupStateCommand.SHOW);
    public data:Observable<any>=new Observable();
}

export class ControlItem extends APopupControlItem{
    public sendPopupCommand(cmd:PopupStateCommand){
        this.controlPipe.next(cmd);
    }
}